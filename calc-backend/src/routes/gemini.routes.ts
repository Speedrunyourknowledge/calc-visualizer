import { Router } from "express";
import { askDerivative, askIntegral } from "../controllers/gemini.controller";

const router = Router();

router.post("/ask-integral", askIntegral);
router.post("/ask-derivative", askDerivative);

export default router;