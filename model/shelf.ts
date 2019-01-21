import Book from './book';
import uuid from 'uuid/v1';

export default class Shelf {
  readonly id: string;
  private _books: Book[]; //本棚に格納されている本

  constructor() {
    this.id = uuid();
    this._books = [];
  }

  get books(): Book[] {
    return this._books;
  }

  public addBook(book: Book): void {
    this._books = [...this._books, book];
  }

  public removeBook(book: Book): void {
    this._books = this._books.filter(b => b.id != book.id);
  }

  public toJSON(): any {
    return {
      id: this.id,
      books: this._books
    };
  }
}
