import Shelf from "../model/shelf";
import Book from "../model/book";
import User from "../model/user";

export function borrowBook(shelf: Shelf, book: Book, user: User) {
  shelf.removeBook(book);
  user.borrowBook(book);
}

export function returnBook(shelf: Shelf, book: Book, user: User) {
  user.returnBook(book);
  shelf.addBook(book);
}
