import {createGraph} from "../controllers/graph.controller";
import { createDerivGraph } from "../controllers/graph.controller";
import { Router } from "express";

const router = Router();

router.post("/create-graph", createGraph);
router.post("/create-deriv-graph", createDerivGraph);

export default router