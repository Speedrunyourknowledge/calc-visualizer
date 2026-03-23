import { Router } from "express";
import { createIntegral, deleteUserFunc, getUserFuncs } from "../controllers/func.controller";
import { requireAuth } from "../middlewares/requireAuth.middleware";

const router = Router();

// These routes can only be accessed by authenticated users
router.post("/create-integral", requireAuth, createIntegral);
router.get("/all", requireAuth, getUserFuncs);
router.delete("/delete/:id", requireAuth, deleteUserFunc);

export default router;