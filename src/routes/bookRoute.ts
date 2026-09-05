import { Router } from "express";
import { addBook, getBook } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.get("/get-book", getBook)
bookRouter.post("/add-book", addBook)
