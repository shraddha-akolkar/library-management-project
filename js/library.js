import BookClass from "./books.js";

class Library {
  constructor(name, location, books = []) {
    this.name = name;
    this.location = location;
    this.books = books; // Array of Book objects
  }

  // method to fetch book
  fetchBook(bookIsbn) {
    return this.books.find(
      (book) => book.isbn === bookIsbn
    );
  }

  displayBooks(myLibrary) {
    if (myLibrary.books) {
      const bookCollection = document.getElementById(
        "book-collection"
      );
      bookCollection.innerHTML = " ";
      myLibrary.books.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("book-item");
        div.innerHTML = `

        <div style="background-color:#a47148; width:500px;height:370px;    margin: 0 auto 20px auto;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;border-radius: 20px;">
        

          <h3 style="text-align: center;padding-top: 30px">BOOK TITLE:${book.bookTitle}</h3><br>
          <h3 style="text-align: center;padding-top: 20px">BOOK AUTHOR:${book.author}</h3><br>
          <p style="text-align: center;padding-top: 20px">ISBN: ${book.isbn}</p><br>
          <p style="text-align: center;padding-top: 20px">GENRE: ${book.genre}</p><br>
          <p style="text-align: center;padding-top: 20px">QUANTITY: ${book.quantity}</p><br>
          <p style="text-align: center;padding-top: 20px">PUBLICATION YEAR: ${book.year}</p><br>
          <p id = "error"></p>
            </div>
          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;margin-bottom:20px;">
          <button  style="width: 200px; height: 40px;background-color:#5e3023;color:white;border-radius: 8px;" id = borrow-${book.isbn} >BORROWED BOOKS</button>
          <button  style="width: 200px; height: 40px;background-color:#5e3023;color:white;border-radius: 8px" id = return-${book.isbn}>RETURNED BOOKS</button>`;
        bookCollection.appendChild(div);

        const borrowbtn = document.getElementById(
          `borrow-${book.isbn}`
        );
        const returnbtn = document.getElementById(
          `return-${book.isbn}`
        );
        borrowbtn.addEventListener("click", () => {
          book.borrowCopy();
          this.displayBooks(myLibrary); // refresh trigger
        });
        returnbtn.addEventListener("click", () => {
          book.returnCopy();
          this.displayBooks(myLibrary);
        });
      });
    }
  }

  addBook(book, myLibrary) {
    if (book instanceof BookClass) {
      const existingBook = this.fetchBook(book.isbn);
      if (existingBook) {
        existingBook.quantity += book.quantity; // Update quantity if book already exists
      } else {
        this.books.push(book);
      }
    } else {
      throw new Error("Invalid book object");
    }

    this.displayBooks(myLibrary);
  }
}

export default Library;