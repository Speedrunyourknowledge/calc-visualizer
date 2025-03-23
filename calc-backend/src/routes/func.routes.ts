import { Router } from "express";
import { createIntegral, getUserFuncs } from "../controllers/func.controller";

const router = Router();

router.post("/create-integral/:id", createIntegral);
router.get("/all/:id", getUserFuncs);

export default router;