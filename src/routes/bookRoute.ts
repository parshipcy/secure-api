import { Router } from "express";
import { addBook, deleteBook, getBook, updateBook } from "../controllers/bookController";

export const bookRouter = Router()

bookRouter.get("/get-book", getBook)
bookRouter.post("/add-book", addBook)
bookRouter.put("/update-book/:id", updateBook)
bookRouter.delete("/delete-book/:id", deleteBook)
