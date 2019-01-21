import Book from './book';
import uuid from 'uuid/v1';
import fs from 'fs';

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

  public save(filePath: string) {
    fs.writeFileSync(filePath, JSON.stringify(this));
  }

  static load(filePath: string): Shelf {
    const shelfData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const shelf: any = new Shelf();
    shelf['id'] = shelfData.id;
    shelf['_books'] = shelfData.books.map((bookData: any) => {
      const book: any = new Book(bookData.title);
      book['id'] = bookData.id;
      return book;
    });

    return shelf as Shelf;
  }
}
