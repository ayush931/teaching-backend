import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello")
})

app.get("/ping", (req, res) => {
  res.send("/pong")
})

export default app;