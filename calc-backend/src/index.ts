import express from "express";
import cors from "cors";
import routes from "./server.routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Prefixes the endpoint with /
app.use('/',routes);

//app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});