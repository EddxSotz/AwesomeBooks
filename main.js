const formElement = document.getElementById("form");
const bookList = document.getElementById("book_list");

let bookListElements = JSON.parse(localStorage.getItem("books")) || [];

/* eslint-disable no-use-before-define */

class Book {
  constructor(title, author) {
    const title = document.getElementById("title_input");
    const author = document.getElementById("author_input");
    this.title = title;
    this.author = author;
  }

  addNewBook() {
    const newBook = new Book(title.value, author.value);
    bookListElements.push(newBook);
    localStorage.setItem("books", JSON.stringify(bookListElements));
    displayAllBooks();
    title.value = "";
    author.value = "";
  }

  removeBook(book) {
    bookListElements = bookListElements.filter((element) => element !== book);
    localStorage.setItem("books", JSON.stringify(bookListElements));
    displayAllBooks();
  }

  displayAllBooks() {
    bookList.innerHTML = "";
    bookListElements.forEach((book) => {
      const bookListItem = document.createElement("li");
      const line = document.createElement("hr");
      bookListItem.innerHTML = `${book.bookTitle}<br/>${book.bookAuthor} <br/>`;
      const btnRemove = document.createElement("button");
      btnRemove.innerHTML = "Remove";
      btnRemove.addEventListener("click", () => removeBook(book));
      bookList.appendChild(bookListItem);
      bookList.appendChild(btnRemove);
      bookList.appendChild(line);
    });
  }
}

displayAllBooks();
