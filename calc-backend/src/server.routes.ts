// Combines all the routes here to use in index.ts
// update this everytime you add a new route

import { Router } from "express";
import graphRoutes from "./routes/graph.routes";
import funcRoutes from "./routes/func.routes";

const router = Router();

// prefix each route with what it will do: auth, user

// will be localhost:3000/user/{whatever you chose in routes directory}
router.use("/graph", graphRoutes); 
router.use("/func", funcRoutes);

export default router;