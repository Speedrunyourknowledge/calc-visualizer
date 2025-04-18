import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:3000" // the base url of your auth server
})

export type Session = typeof authClient.$Infer.Session;