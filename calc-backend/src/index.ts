import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./server.routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json())

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});