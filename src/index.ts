import express, {Express, Request, Response} from "express"
import {config} from "dotenv"
import cors from "cors"
import dbConnect from "./utils/db"
import { routes } from "./routes"

const app: Express = express()

config()
const port = process.env.PORT || 8080

// connect db
dbConnect()

//middlewares
app.use(cors({
    origin: process.env.HOST_URL || "*"
}))

// prepare the request first, then send it to the route.
app.use(express.json())

app.use("/api", routes)

//endpoints
app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "Hello world"})
})

app.listen(port,() => console.log(`Server running on port ${port}`))