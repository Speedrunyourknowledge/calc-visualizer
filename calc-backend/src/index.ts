import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./server.routes";
import errorMiddleware from "./middlewares/errorHandler.middleware";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json())

// Prefixes the endpoint with /api
app.use('/api',routes);

//app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});