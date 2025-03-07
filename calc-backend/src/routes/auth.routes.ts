import { Router } from "express";
// import middleware

// here would go all routes for authentiaction
// /login, /sign-in, /sign-up

const router = Router();

// would be a post instead of get
router.get("/login");

export default router;