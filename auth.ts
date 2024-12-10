import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs-react"
import prisma from "@/prisma/client";

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name : {label: "Name", type: "text", placeholder: "Name"},
                email: {label: "Email", type: "email", placeholder: "Email"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials, request) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email as string},
                });
                if (!user) return null;

                const passwordsMatch = await bcrypt.compare(credentials.password as string, user.hashedPassword!);
                return passwordsMatch ? user : null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt",
    }
});