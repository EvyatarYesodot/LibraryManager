import { Book, BookType } from "../models/Book.js";

export async function createNewBook(bookData: BookType): Promise<BookType | undefined> {
  try {
    const result = await Book.create(bookData);
    return result as BookType;
  } catch (error) {
    console.error(`Error creating the book`, error);
    return undefined;
  }
}

export async function getBooksByAuthorName(authorName: string): Promise<BookType[] | undefined> {
  try {
    const resultBooks = await Book.find({ author: authorName }).lean();
    return resultBooks as BookType[];
  } catch (error) {
    console.error(`Error retrieving books`, error);
    return undefined;
  }
}

export async function searchBooksByText(searchTerm: string): Promise<BookType[] | undefined> {
  try {
    const resultSearch = await Book.find({
      $or: [
        { bookName: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    }).lean();
    return resultSearch as BookType[];
  } catch (error) {
    console.error(`Error while searching for books by text`, error);
    return undefined;
  }
}

export async function searchBookByPagesNum(pagesNum: number): Promise<BookType[] | undefined> {
  try {
    const resultSearch = await Book.find({
      numberOfPages: { $gt: pagesNum }}).sort({ numberOfPages: 1 }).lean();
    return resultSearch as BookType[];
  } catch (error) {
    console.error(`Error while searching for books by pages number`, error);
    return undefined;
  }
}
