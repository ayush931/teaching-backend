import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", register)// http://localhost:8000/user/register

export default userRouter