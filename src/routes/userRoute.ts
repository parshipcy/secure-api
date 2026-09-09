import { Router } from "express";
import { login, logout, signup } from "../controllers/userController";

export const userRouter = Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/logout", logout)
