import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// the app experss
export const app = express();

// config
if (process.env.NODE_ENV !== "production") {
  config({ path: "./config/.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// using Routes
app.use("/api/v1", userRouter);

// Middleware for Errors
app.use(errorMiddleware);
