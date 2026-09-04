import { model, Schema } from "mongoose"

export interface MyBooks {
    name: string,
    author: string,
    publishYear: number,
    description: string,
}

const bookSchema = new Schema<MyBooks>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

export const Book = model<MyBooks>("Book", bookSchema)
