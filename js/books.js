class Book {
  constructor(
    bookTitle,
    isbn,
    author,
    genre,
    quantity,
    year,
    borrowedCopies
  ) {
    this.bookTitle = bookTitle;
    this.isbn = isbn;
    this.author = author;
    this.genre = genre;
    this.quantity = quantity || 1;
    this.year = year || NaN;
    this.borrowedCopies = borrowedCopies || 0;
  }

  getAvaliableCoppies() {
    const availble = this.quantity - this.borrowedCopies;
    return availble > 0 ? availble : 0;
  }

  borrowCopy() {
    if (this.getAvaliableCoppies() > 0) {
      console.log("hello from borrow");
      this.borrowedCopies++;
      this.quantity--;
    } else {
      const error = document.getElementById("error");
      error.innerText = "No coppies avaliable";
    }
  }

  returnCopy() {
    if (this.borrowedCopies > 0) {
      this.borrowedCopies--;
      this.quantity++;
    } else {
      const error = document.getElementById("error");
      error.innerText = "No Borrowed book";
    }
  }
}

export default Book;