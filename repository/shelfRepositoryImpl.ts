import { ShelfRepository } from "./shelfRepository";
import Shelf from "../model/Shelf";
import fs from 'fs';
import Book from "../model/Book";

export class ShelfRepositoryImpl implements ShelfRepository {
  constructor(private filePath: string) { }

  public save(shelf: Shelf): void {
    fs.writeFileSync(this.filePath, JSON.stringify(shelf));
  }

  public load(): Shelf {
    const shelfData = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
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
