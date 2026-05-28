import "dotenv/config";
import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || "localhost";

export async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log("Successfully connected to local MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
