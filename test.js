const favoriteBooks = [];

addFavoriteBook("BookGreatFirst");
addFavoriteBook("BookGrateSecond");
addFavoriteBook("BookGreetThird");
addFavoriteBook("BookGreatFourth");
addFavoriteBook("BookGreatFifth");

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

printFavoriteBooks();

console.log(
  `All books not containing the word "great" ${favoriteBooks} totaling: ${favoriteBooks.length}`
);

// var greeting = "Hello";

// console.log(number.isNaN(greeting));
