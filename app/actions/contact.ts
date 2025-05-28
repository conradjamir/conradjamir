"use server"

import { z } from "zod"

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
    // Here you can either:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to a database
    // 3. Send to a webhook

    // For demonstration, I'll simulate an email send
    await sendEmail({
      to: "conradjamir@gmail.com", // Replace with your email
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

// Mock email function - replace with your preferred email service
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
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would use a service like:
  // - Resend: https://resend.com/
  // - SendGrid: https://sendgrid.com/
  // - Nodemailer with SMTP
  // - AWS SES

  console.log("Email sent:", { to, from, subject, html })

  // Uncomment and modify this example for Resend:
  /*
  const { Resend } = require('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: to,
    subject: subject,
    html: html,
    reply_to: from,
  })
  */
}
