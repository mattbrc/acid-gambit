import * as z from "zod"
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';

export async function POST(req: Request) {
  try {
    const supabase = createRouteHandlerClient<Database>({cookies});
    const {
      data: { session }
    } = await supabase.auth.getSession();

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { id, programId } = await req.json()

    // upsert DB
    const { data, error } = await supabase
    .from('user_training')
    .upsert({ id: id, active_program: programId })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}