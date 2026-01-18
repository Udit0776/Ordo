import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true,
        minLength: 2,
        maxLength: 50,
     },
    lastName: { 
        type: String,
     },
    emailId: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error ("Invalid email address: " + value);
            }
        }
     },
    password: { 
        type: String, 
        required: true,
        min: 8,
        max: 20,
     },
    age: { type: Number },
    // Added restricted gender options
    gender: { 
        type: String,
        lowercase: true,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not a valid gender"
        }
    },
    // Added role with default "user"
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    profileUrl: { 
        type: String,
        default: "https://example.com/default-avatar.png",
     },
    token: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;