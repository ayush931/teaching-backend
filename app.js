import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello")
})

app.use("/api/v1/user", userRouter);

export default app;