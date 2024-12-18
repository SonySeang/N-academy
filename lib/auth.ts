import prisma from "@/prisma/client";
import NextAuth, { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          console.log("User not found");
          return null;
        }
        const passwordIsMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (!passwordIsMatch) {
          console.log("Password does not match");
          return null;
        }
        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const isLoggingIn = Boolean(auth?.user);
      const isTryingToAccessDashboard =
        request.nextUrl.pathname.includes("/dashboard");
      if (!isLoggingIn && isTryingToAccessDashboard) {
        return false;
      }
      if (isLoggingIn && isTryingToAccessDashboard) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      if (!isTryingToAccessDashboard) {
        return true;
      }
      if (!isLoggingIn && !isTryingToAccessDashboard) {
        return true;
      }
      return false;
    },
    jwt: ({ token, user }) => {
      if (user) {
        if (user?.id) {
          token.userId = user.id;
        }
      }

      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
