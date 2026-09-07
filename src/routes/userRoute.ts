import { Router } from "express";
import { signup } from "../controllers/userController";

export const userRouter = Router()

userRouter.post("/signup", signup)
