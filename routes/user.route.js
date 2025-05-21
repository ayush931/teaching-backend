import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", register)// http://localhost:8000/user/register
userRouter.post("/login", login)

export default userRouter