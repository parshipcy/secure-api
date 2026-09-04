import mongoose from "mongoose"

const dbConnect: () => Promise<void> = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI as string)
        // console.log("Connected to DB")
    } catch(error: any){
        // console.log("Error connecting to DB", error.message)
        // process.exit(1)
    }
}

export default dbConnect
