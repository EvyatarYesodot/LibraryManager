import { Author, AuthorType } from "../models/Author.js";

export async function createNewAuthor(authorData: AuthorType): Promise<AuthorType | undefined> {
  try {
    const newAuthor = await Author.create(authorData);
    return newAuthor as AuthorType;
  } catch (error) {
    console.error(`Error creating the author`, error);
    return undefined;
  }
}
