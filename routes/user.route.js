import { Router } from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", register)
userRouter.post("/login", login);
userRouter.post("/logout", auth, logout)

export default userRouter