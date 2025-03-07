import { Router } from "express";
// import middleware
// import controllers

// here would go all routes for authentiaction
// /login, /sign-in, /sign-up

const router = Router();

// would be a post instead of get probably
router.get("/login");
// router.get("sign-up", middlewareFunction, loginHandler); // example

export default router;