import express, { type Application } from "express";
import { connectDb } from "./database/database.js";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

connectDb().then(() => {
    console.log("Database connected successfully"),
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
    })
})