import {createGraph} from "../controllers/graph.controller";
import { Router } from "express";

const router = Router();

router.get("/create-graph", createGraph);

export default router