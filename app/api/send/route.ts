import { Resend } from "resend";

import VerifyEmail from "@/emails/verify-email";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get the request body data
    const { to, url, subject, template, name } = await request.json();

    if (!template || !to || !subject) {
      return Response.json(
        { error: "template, to, url, subject are required" },
        { status: 400 }
      );
    }

    let email;

    if (template === "verify-email") {
      email = await Promise.resolve(VerifyEmail({ url }));
    } else if (template === "welcome") {
      email = await Promise.resolve(WelcomeEmail({ name }));
    }

    const { data, error } = await resend.emails.send({
      from: "boilerplate@alisamadii.com",
      to: to,
      subject: subject || "Hello world",
      react: email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
