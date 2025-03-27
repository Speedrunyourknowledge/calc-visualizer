import { Router } from "express";
import { createIntegral, deleteUserFunc, getUserFuncs } from "../controllers/func.controller";

const router = Router();

router.post("/create-integral/:id", createIntegral);
router.get("/all/:id", getUserFuncs);
router.delete("/delete/:id", deleteUserFunc);

export default router;