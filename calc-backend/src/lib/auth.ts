import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
    trustedOrigins: ["http://localhost:5173", 
      "https://calcvisualizer.speedrunyourknowledge.com",
    ],
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
      cookiePrefix: "calcvis",
      crossSubDomainCookies: {
        enabled: true,
        domain: ".speedrunyourknowledge.com", // Domain with a leading period
      },
      defaultCookieAttributes: {
        secure: true,
        httpOnly: true,
        sameSite: "none",  // Allows CORS-based cookie sharing across subdomains
        partitioned: true, // New browser standards will mandate this for foreign cookies
      },
    },
    onAPIError: {
      throw: true,
      onError: (e) =>{
        console.error('Auth error: ' + e)
      },
      errorURL: process.env.FRONTEND_URL || 'http://localhost:5173' + '/auth-error'
    }
});
