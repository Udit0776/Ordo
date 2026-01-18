import { Router, type Request, type Response } from "express"; 
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../user/user.schema.js";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.findOne({ emailId: emailId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            // create jwt token
            // adding the private key
            const token = await jwt.sign({ _id: user._id }, "Ordo$0776#5220@18");
            console.log(token);
            res.cookie("token", token);
        }
        res.status(200).json({ 
            message: "Login successful",
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;