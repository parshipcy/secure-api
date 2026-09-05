import { Request, Response } from "express"
import { Book } from "../models/book"

interface MyResponse {
    success: boolean,
    message: string,
    data?: any
}

export const getBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.find()
        if(!book) return res.status(404).json({success: false, message: "No books found"} as MyResponse)

        return res.status(200).json({success: true, message: "books found", data: book} as MyResponse)    
    } catch(error) {
        return res.status(500).json({ success: false, message: "Internal server error" } as MyResponse)
    }
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

export const updateBook = async(req: Request, res: Response) => {
    const { id } = req.params

    const { name, author, publishYear, description } = req.body

    try {
        const book = await Book.findByIdAndUpdate(id, { name, author, publishYear, description }, { new: true })
        if(!book) return res.status(404).json({ success: false, message: "No book found"})

        return res.status(200).json({ success: true, message: "Book Updated", data: book } as MyResponse)
    } catch (error: any) {
        return res.status(500).json({success: false, message: error.message} as MyResponse)
    }
}

export const deleteBook = async(req: Request, res: Response) => {
    const { id } = req.params

    try {
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({success: false, message: "No book found"})
        }

        return res.status(200).json({success: false, message: "Book deleted"})
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"} as MyResponse)
    }
}
