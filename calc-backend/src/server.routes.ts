// Combines all the routes here to use in index.ts
// update this everytime you add a new route

import { Router } from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const router = Router();

// prefix each route with what it will do: auth, user

// Prefixes the endpoint you created with what you specify here
//router.use("/auth", authRoutes);

// will be localhost:3000/user/{whatever you chose in routes directory}
router.use("/user", userRoutes); 

export default router;