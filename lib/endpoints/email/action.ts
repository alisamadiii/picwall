"use server";

import { Resend, CreateEmailResponseSuccess } from "resend";

import VerifyEmail from "@/emails/verify-email";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function verifyEmailPassword({
  to,
  url,
}: {
  to: string;
  url: string;
}): Promise<FunctionResponse<CreateEmailResponseSuccess | null>> {
  try {
    const { data, error } = await resend.emails.send({
      from: "boilerplate@alisamadii.com",
      to: to,
      subject: "Verify your email address",
      react: VerifyEmail({ url }),
    });

    if (error) {
      return { data: data, message: "Email not sent", status: 500 };
    }

    return { data: data, message: "Email sent", status: 200 };
  } catch (error) {
    return { data: null, message: "Email not sent", status: 500 };
  }
}
