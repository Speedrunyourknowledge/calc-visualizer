import express from "express";
import cors from "cors";
import routes from "./server.routes";
import errorMiddleware from "./middlewares/errorHandler.middleware";
import { toNodeHandler, fromNodeHeaders} from "better-auth/node";
import { auth } from "./lib/auth";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.all("/api/auth/*", toNodeHandler(auth));

app.get("/api/session", async (req, res) => {
  const session = await auth.api.getSession({
     headers: fromNodeHeaders(req.headers),
   });
 return res.json(session);
});

app.use(express.json()) // use this after better auth

// Prefixes the endpoint with /
app.use('/',routes);

//app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});