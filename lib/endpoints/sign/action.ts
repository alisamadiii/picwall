"use server";

import axios from "axios";

export async function sendVerificationEmail(email: string, url: string) {
  await axios.post("/api/send", {
    to: email,
    url,
    subject: "Verify your email address",
  });
}
