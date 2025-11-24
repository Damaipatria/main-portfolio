import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "Username wajib disi !"),
  password: z.string().min(1, "Password wajib disi !"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
