import {createGraph} from "../controllers/graph.controller";
import { Router } from "express";

const router = Router();

router.post("/create-graph", createGraph);

export default router