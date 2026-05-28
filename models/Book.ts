import mongoose from "mongoose";

export interface BookType {
  bookName: string;
  description?: string;
  publicationDate?: Date;
  author: string;
  numberOfPages?: number;
}

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  description: { type: String },
  publicationDate: { type: Date },
  author: { type: String, required: true },
  numberOfPages: { type: Number },
});

export const Book = mongoose.model("book", bookSchema);
