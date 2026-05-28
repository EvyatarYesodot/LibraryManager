import mongoose from "mongoose";

export interface AuthorType {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
}

const authorSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String },
  yearOfBirth: { type: Number },
});

export const Author = mongoose.model("author", authorSchema);
