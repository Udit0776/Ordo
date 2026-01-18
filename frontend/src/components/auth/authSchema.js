import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = signInSchema.extend({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
});