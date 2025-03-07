import { Express, Request, Response, NextFunction } from "express";
import getUsersHandler from "../controllers/user.controller";
import { Router } from "express";
// import middleware

// Here are routes for users

// middleware would be called after the route but before the main handler
// you can chain middlewares
// "/users", middleware1, middleware2, getUsersHandler

const router = Router();

router.get("/get-users", getUsersHandler);

export default router;