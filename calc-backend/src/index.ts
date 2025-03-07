import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});