import { createNewAuthor } from "../DAL/CRUDauthor.js";
import { createNewBook } from "../DAL/CRUDbooks.js";
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
