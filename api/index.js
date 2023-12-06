import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000!!!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
