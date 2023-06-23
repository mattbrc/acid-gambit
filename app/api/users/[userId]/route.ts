import { z } from "zod"
import { profileSchema } from "@/lib/validations/user"
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const supabase = createRouteHandlerClient<Database>({cookies});
    const {
      data: { session }
    } = await supabase.auth.getSession();
    const {
      data: { user }
    } = await supabase.auth.getUser();
    // Validate the route context.
    const { params } = routeContextSchema.parse(context)


    // Ensure user is authentication and has access to this user.
    if (!session?.user || params.userId !== session.user?.id) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const payload = profileSchema.parse(body)

    // Update the user.
    const { data, error } = await supabase
    .from('users')
    .update({ full_name: payload.name, username: payload.username, bio: payload.bio })
    .match({ id: session.user.id })
    if (error?.message) {
      // Duplicate username.
      return new Response(
        JSON.stringify({ error: 'Username already exists' }),
        { status: 409 }
      );
    }
    return new Response(null, { status: 200 })
  } catch (error) {
    // if (error instanceof z.ZodError) {
    //   return new Response(JSON.stringify(error.issues), { status: 422 })
    // }

    return new Response(null, { status: 500 })
  }
}
