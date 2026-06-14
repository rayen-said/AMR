"use server";

import { z } from "zod";
import { jsx } from "react/jsx-runtime";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  org: z.string().min(1, "Organization is required").max(200),
  hectares: z.enum(["under-100", "100-500", "500-2000", "over-2000"]),
  message: z.string().min(1, "Message is required").max(5000),
});

export type ContactState = {
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
  message?: string;
  success?: boolean;
};

export async function contact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validated = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    org: formData.get("org"),
    hectares: formData.get("hectares"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  const { name, email, org, hectares, message } = validated.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return { message: "Server configuration error. Please try again later." };
  }

  const resend = new Resend(resendApiKey);
  const toAddress = process.env.CONTACT_EMAIL ?? "contact@amrsolutions.tech";

  try {
    const { data, error } = await resend.emails.send({
      from: "AMR Solutions <contact@amrsolutions.tech>",
      to: [toAddress],
      replyTo: email,
      subject: `New enquiry from ${name} at ${org}`,
      react: jsx(ContactFormEmail, { name, email, org, hectares, message }),
    });

    if (error || !data?.id) {
      console.error("Resend API error:", error);
      return { message: "Failed to send message. Please try again." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Contact form email error:", err);
    return { message: "An unexpected error occurred. Please try again." };
  }
}
