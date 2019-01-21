import User from './model/user';
import Shelf from './model/shelf';

const shelf = Shelf.load('./shelf.json');
const user = new User("mogamin");

console.log('===== 初期状態 =====')
printBorrowedBooks(user);
printShelf(shelf);

const borrowBook = shelf.books[0];
shelf.removeBook(borrowBook);
user.borrowBook(borrowBook);

shelf.save('./shelf.json');

console.log('===== 1冊借りたあと =====')
printBorrowedBooks(user);
printShelf(shelf);

console.log('===== 返却 =====');
// returnBook(shelf, user.borrowedBook[0], user);
const returnBook = user.borrowedBook[0];
user.returnBook(returnBook);
shelf.addBook(returnBook);

// shelfRepository.save(shelf);
shelf.save('./shelf.json');
printBorrowedBooks(user);
printShelf(shelf);

// printしてくれるやつ
function printBorrowedBooks(user: User) {
  console.log(`--- ${user.name}が現在借りている本 ---`)
  console.log(`${user.borrowedBook.length}冊`);
  user.borrowedBook.forEach(b => console.log(`id: ${b.id}, title: ${b.title}`));
}

function printShelf(shelf: Shelf) {
  console.log("--- 本棚の中身 ---");
  console.log(`${shelf.books.length}冊`);
  shelf.books.forEach(b => console.log(`id: ${b.id}, title: ${b.title}`));
}
