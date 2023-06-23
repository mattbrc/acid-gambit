import * as z from "zod"

export const profileSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(40, {
    message: "Name must not be longer than 32 characters.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }).max(32, {
    message: "Username must not be longer than 32 characters.",
  }),
  bio: z.string().max(160, {
    message: "Bio must not be longer than 160 characters.",
  }).optional(),
})