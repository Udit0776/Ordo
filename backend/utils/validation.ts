import { type Request } from "express";
import validator from "validator";

export const validateSignUp = (req: Request) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Name is not valid");
    }

    else if (firstName.length < 2 || firstName.length > 50) {
        throw new Error("First name should be between 2-50 characters");
    }

    else if (!validator.isEmail(emailId)) {
        throw new Error("Invalid email id");
    }

    else if (password.length < 8 || password.lenght > 20) {
        throw new Error("Password should be between 8-20 characters");
    }

    else if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password");
    }
};