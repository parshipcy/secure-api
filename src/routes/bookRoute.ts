import { Router } from "express";
import { addBook, deleteBook, getBook, updateBook } from "../controllers/bookController";
import { verify } from "../utils/middlewares";

export const bookRouter = Router()

bookRouter.get("/get-book", getBook)
bookRouter.post("/add-book", verify, addBook)
bookRouter.put("/update-book/:id", verify, updateBook)
bookRouter.delete("/delete-book/:id", deleteBook)
