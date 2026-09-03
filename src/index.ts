import express, {Express, Request, Response} from "express"
import {config} from "dotenv"

const app: Express = express()
config()
const port = process.env.PORT || 8080

app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "Hello world"})
})

app.listen(port,() => console.log(`Server running on port ${port}`))