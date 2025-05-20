import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello")
})

app.use("/user", userRouter) // http://localhost:8000/user

// for knowledge -> no use case in backend

app.post("/user/:name", (req, res) => {
  const name = req.params.name
  res.send(name)
})

app.post("/user", (req, res) => {
  const number1 = Number(req.query.number1) // ? 
  const number2 = Number(req.query.number2) // ?
  res.send(number1 + number2)
})

app.get("/user/detail", (req, res) => {
  const {name} = req.body // json
  if (name) {
    return res.send(name)
  }
})

export default app;