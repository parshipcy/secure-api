import mongoose, { model, Schema } from "mongoose"

interface MyUser {
    name: string,
    email: string,
    phone: number,
    username: string,
    password: string,
    booksAdded: string[],
    role: string
}

export const userSchema = new Schema<MyUser>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    booksAdded: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ],
    role: {
        type: String,
        enum: ["admin", "creator", "visitor"]
    }
})

export const User = model<MyUser>("User", userSchema)
