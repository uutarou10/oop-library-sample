import uuid from 'uuid/v1';

export default class Book {
  readonly id: string;

  constructor(
    private _title: string,
    // private _isbn: string
  ) {
    this.id = uuid();
  }

  get title(): string {
    return this._title;
  }

  // get isbn(): String {
  //   return this._isbn;
  // }

  public toJSON(): any {
    return {
      id: this.id,
      title: this._title
    };
  }
}
