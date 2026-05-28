import { createNewAuthor } from "../DAL/CRUDauthor.js";
import { createNewBook, getBooksByAuthorName, searchBookByPagesNum, searchBooksByText } from "../DAL/CRUDbooks.js";
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

export async function printBooksByNum(): Promise<void> {
  try {
    const books = await searchBookByPagesNum(250);
    if (!books || books.length === 0) {
      console.log(`No books over 250 pages were found.`);
      return;
    }
    console.log(books);
  } catch (error) {
    console.error(`Error when printing books larger than 250 pages:`, error);
  }
}

export async function printTextSearchResults(searchTerm: string): Promise<void> {
  try {
    const foundBooks = await searchBooksByText(searchTerm);
    if (!foundBooks || foundBooks.length === 0) {
      console.log(`No books were found matching the search phrase: "${searchTerm}"`);
      return;
    }
    console.log(foundBooks);
  } catch (error) {
    console.error(`Error while printing search results: `, error);
  }
}
