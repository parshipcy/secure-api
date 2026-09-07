import { Router } from "express";
import { bookRouter } from "./bookRoute";
import { userRouter } from "./userRoute";

export const routes = Router()

routes.use("/books", bookRouter)
routes.use("/user", userRouter)
