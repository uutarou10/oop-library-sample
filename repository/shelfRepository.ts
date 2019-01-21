import Shelf from "../model/Shelf";

export interface ShelfRepository {
  save(shelf: Shelf): void;
  load(): Shelf;
}
