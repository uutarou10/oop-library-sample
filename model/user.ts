import Book from './book';
import uuid from 'uuid/v1';

export default class User {
  readonly id: string;
  private _borrowedBook: Book[];

  constructor(
    private _name: string,
  ) {
    this.id = uuid();
    this._borrowedBook = [];
  }

  get name(): string {
    return this._name;
  }

  get borrowedBook(): Book[] {
    return this._borrowedBook;
  }

  public borrowBook(book: Book): void {
    this._borrowedBook = [...this._borrowedBook, book];
  }

  public returnBook(book: Book): void {
    this._borrowedBook = this._borrowedBook.filter(b => b.id != book.id);
  }
}
