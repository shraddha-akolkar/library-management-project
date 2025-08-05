import Book from "./books.js";
import Library from "./library.js";

const myLibrary = new Library(
  "SYK LIBRARY",
  "Ahilyanagar"
);

const myLibraryName =
  document.getElementById("library-name");
myLibraryName.innerText = myLibrary.name;

// fetch all forms elements
const bookForm = document.getElementById("add-book-form");
// fetch all input elements from the form
const bookTitleInput =
  document.getElementById("book-title");
const isbnInput = document.getElementById("book-isbn");
const authorInput = document.getElementById("book-author");
const genreInput = document.getElementById("book-genre");
const quantityInput =
  document.getElementById("book-quantity");
const yearInput = document.getElementById("book-published");

console.log(bookForm);

bookForm.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
  // event.preventDefault prevents the default form submission behavior
  // which would cause a page reload
  event.preventDefault();
  //   fetching values from the form inputs
  const bookTitle = bookTitleInput.value;
  const isbn = isbnInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const quantity = parseInt(quantityInput.value, 10) || 1;
  const year = parseInt(yearInput.value, 10) || NaN;

  // Create a new Book Class instance
  const newBook = new Book(
    bookTitle,
    isbn,
    author,
    genre,
    quantity,
    year
  );
  // Add the new book to the library
  myLibrary.addBook(newBook, myLibrary);
  console.log(myLibrary);
}
myLibrary.displayBooks();