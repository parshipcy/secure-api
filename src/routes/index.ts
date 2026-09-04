import { Router } from "express";
import { bookRouter } from "./bookRoute";

export const routes = Router()

routes.use("/books", bookRouter)
