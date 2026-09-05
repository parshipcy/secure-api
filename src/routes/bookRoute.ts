import { Router, Request, Response } from "express";
import { getBooks } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.get("/get-book", getBooks)
