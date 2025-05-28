import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email address" }).trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message must be less than 1000 characters" })
    .trim(),
})
