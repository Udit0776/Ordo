import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./config/config.env"
});

const uri = process.env.MONGO_URI;
const dbName = "Ordo";

export const connectDb = async (): Promise<void> => {
    try {
        if (!uri) {
            throw new Error("Unable to get the MONGO_URI from environment variables");
        }
        
        await mongoose.connect(uri, {
            dbName: dbName,
        });

        console.log(`Successfully connected to MongoDB: ${dbName}`);
    } catch (err) {
        console.error("Connection Error: ", err);
        process.exit(1); 
    }
};