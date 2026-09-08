import { Request, Response } from "express"
import { MyResponse } from "./bookController"
import { MyUser, User } from "../models/user"
import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken"

export const signup = async (req: Request, res: Response) => {
    const { name, email, phone, username, password, role } = req.body

    try {
        const secure =await bcrypt.hash(password, 10)

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
            name, email, phone, username, password:secure, role
        })

        return res.status(201).json({success: true, message: "Signup successfull", data: user} as MyResponse)

    } catch(error: any) {
        return res.status(500).json({ success: false, message: error.message, data: null} as MyResponse)
    }
}

export const login = async(req: Request, res: Response) => {
    const { email, username, password } = req.body

    try {
        if((!email && !username) || !password) {
            return res.status(500).json({ success: false, message: "Please provide email or username, and a password", data: null} as MyResponse)
        }

        //find the user
        let user: MyUser | null
        user = await User.findOne({ email })

        //if not user then signup
        if(!user){
            return res.status(400).json({ success: false, message: "Please signup", data: null} as MyResponse)
        }

        //password checking
        //using a generic message to prevent attackers from discovering whether an email exists
        const ok = await bcrypt.compare(password, user.password) //compare the submitted password to the stored hash from signup (user.password)
        if(!ok) return res.status(400).json({ success: false, message: "Wrong email or password", data: null })

        //jwt integration
        const payload = {
            id: user._id,
            role: user.role
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as Secret, {
            expiresIn: "30min"
        })
        
        return res.status(200).cookie("token", token).json({ success: true, message: "login successfull", data: { email, username, password }} as MyResponse)
    } catch(error: any){
        return res.status(500).json({ success: false, message: error.message, data: null} as MyResponse)
    }
}