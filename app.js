import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");

app.set("views", [
    path.join(__dirname, "views/user"),
    path.join(__dirname, "views/admin")
]);

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", userRouter);

app.listen(process.env.PORT, () => {
    console.log("SERVER RUNNING");
});

export default app;