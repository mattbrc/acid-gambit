import * as z from "zod"

export const userNameSchema = z.object({
  email: z.string().min(3).max(32),
})