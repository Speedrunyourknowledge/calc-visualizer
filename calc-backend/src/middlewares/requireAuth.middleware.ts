import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = session.user;
    next();
}
