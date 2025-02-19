import axios from "axios";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { createAuthMiddleware } from "better-auth/api";
import { admin } from "better-auth/plugins";

import { user, account, session, verification } from "../db/schema";

import { db } from "../db";
import { verifyEmailPassword } from "./endpoints/email/action";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      console.log("SENDING VERIFICATION EMAIL");
      const data = await verifyEmailPassword({
        to: user.email,
        url,
      });

      console.log(data);
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path.startsWith("/sign-up")) {
        const newSession = ctx.context.newSession;
        if (newSession) {
          console.log(
            "NEW SESSION 🔥🟢",
            `${process.env.BETTER_AUTH_URL}/api/send`
          );
          await axios.post(`${process.env.BETTER_AUTH_URL}/api/send`, {
            to: newSession.user.email,
            subject: "Welcome to our platform!",
            template: "welcome",
            name: newSession.user.name,
          });
        }
      }
    }),
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      account,
      session,
      verification,
    },
  }),
  plugins: [nextCookies(), admin()],
});
