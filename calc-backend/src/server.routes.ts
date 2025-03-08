// Combines all the routes here to use in index.ts
// update this everytime you add a new route

import { Router } from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const router = Router();

// first prefix each route with /api and then:
// prefix each route with what it will do: auth, user

// Prefixes the endpoint you created with what you specify here
//router.use("/api/auth", authRoutes);

// will be localhost:3000/api/user/{whatever you chose in routes directory}
router.use("/api/user", userRoutes);

export default router;