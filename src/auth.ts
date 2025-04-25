import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { redirect } from "next/dist/server/api-utils";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
                    response_type: "code",
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})