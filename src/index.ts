import express, {Express, Request, Response} from "express"
import {config} from "dotenv"
import cors from "cors"

const app: Express = express()

config()
const port = process.env.PORT || 8080

//middlewares
app.use(cors({
    origin: process.env.HOST_URL || "*"
}))

app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "Hello world"})
})

app.listen(port,() => console.log(`Server running on port ${port}`))