"use server"

import { z } from "zod"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const contactSchema = z.object({
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

export type FormState = {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
  success: boolean
}

async function sendEmail({
  to,
  from,
  subject,
  html,
}: {
  to: string
  from: string
  subject: string
  html: string
}) {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this once you verify your domain
      to: to,
      subject: subject,
      html: html,
      replyTo: from,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form fields
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    await sendEmail({
      to: "conradjamir@gmail.com",
      from: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return {
      message: "Message sent successfully!",
      success: true,
      errors: {},
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      message: "Failed to send message. Please try again later.",
      success: false,
      errors: {},
    }
  }
}
