import { Router, Request, Response } from "express";

export const bookRouter = Router()

bookRouter.get("/get-book", (req: Request, res: Response) => {
    return res.json({success: false, message: "No books found"})
})
