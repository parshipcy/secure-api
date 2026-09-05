import { Request, Response } from "express"
import { Book } from "../models/book"

interface MyResponse {
    success: boolean,
    message: string,
    data?: any
}

export const getBook = (req: Request, res: Response) => {
    return res.json({success: false, message: "books found"} as MyResponse)
}

export const addBook = async(req: Request, res: Response) => {
    const { name, author, publishYear, description } = req.body

    try {
        const book = await Book.create({
            name, author, publishYear, description
        })

        return res.status(201).json({success: true, message: "book added", data: book} as MyResponse)
    } catch(error: any) {
        return res.status(500).json({ success: false, message: error.message} as MyResponse)
    }
}
