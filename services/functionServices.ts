import { createNewAuthor } from "../DAL/CRUDauthor.js";
import { createNewBook, getBooksByAuthorName } from "../DAL/CRUDbooks.js";
import { AuthorType } from "../models/Author.js";
import { BookType } from "../models/Book.js";

export async function createDocumentIncollection(type: "book" | "author", data: BookType | AuthorType): Promise<void> {
  try {
    if (type === "book") {
      const newBook = await createNewBook(data as BookType);
      console.log(newBook);
      return;
    }
    if (type === "author") {
      const newAuthor = await createNewAuthor(data as AuthorType);
      console.log(newAuthor);
      return;
    }
  } catch (error) {
    console.error(`Error creating document`, error);
  }
}

export async function printBooksByAuthor(authorName: string): Promise<void> {
  try {
    const books = await getBooksByAuthorName(authorName);
    if (!books || books.length === 0) {
      console.log(`No books were found in the system for the author: ${authorName}`);
      return;
    }
    console.log(books);
  } catch (error) {
    console.error(`Error while printing the author's books:`, error);
  }
}
