import { Request, Response } from "express"
import { MyResponse } from "./bookController"
import { MyUser, User } from "../models/user"

export const signup = async (req: Request, res: Response) => {
    const { name, email, phone, username, password, role } = req.body

    try {
        if(!name || !email || !phone || !username || !password || !role) {
            return res.status(400).json({success:false, message: "Please fill all the required details", data: null})
        }

        //if the user already has account
        let user: MyUser | null;
        user = await User.findOne({email})
        if(user){
            return res.status(500).json({ success: false, message: "Please login", data: null} as MyResponse)
        }

        //if user is null
        user = await User.create({
            name, email, phone, username, password, role
        })
        return res.status(201).json({success: true, message: "Signup successfull", data: user} as MyResponse)


    } catch(error: any) {
        return res.status(500).json({ success: false, message: error.message, data: null} as MyResponse)
    }
}