import bcrypt from 'bcrypt';
import { Router, type Response, type Request } from "express";
import jwt from "jsonwebtoken";
import User from "./user.schema.js";
import { validateSignUp } from "../utils/validation.js";

const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
    try {
        // 1. Validation
        validateSignUp(req);

        // 2. Destructure ALL needed fields
        const { firstName, lastName, emailId, password } = req.body;

        // 3. Encrypt password (Use 10 salt rounds!)
        const passwordHash = await bcrypt.hash(password, 10);

        // 4. Check if user ALREADY exists
        const existingUser = await User.findOne({ emailId: emailId });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        // 5. Create and SAVE the user with the HASHED password
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash // Use the encrypted version here!
        });

        await user.save();
        res.status(201).json({ message: "User saved successfully", data: user });

    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/profile", async (req: Request, res: Response) => {
    const cookies = req.cookies;
    const { token } = cookies;

    // validate the token by doing the jwt.verify()
    // verify is synchronous to never use await
    try {
        const decodedMessage: any = jwt.verify(token, "Ordo$0776#5220@18");

        // informaation about the logged in user
        const { _id } = decodedMessage;
        const user = await User.findById(_id);

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    }catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
})

export default router;