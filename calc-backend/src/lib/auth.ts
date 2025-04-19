import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
    trustedOrigins: ["http://localhost:5173", 'https://calcvisualizer.netlify.app'],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 60 * 60 // Cache duration in seconds
      }
    },
    advanced: {
      cookiePrefix: "calcvis"
    },
    onAPIError: {
      throw: true,
      onError: (e) =>{
        console.error('Auth error: ' + e)
      },
      errorURL: process.env.FRONTEND_URL || 'http://localhost:5173' + '/auth-error'
    }
});
