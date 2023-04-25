class Book {
  constructor() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];
    this.lastId = (this.books.length > 0) ?
      this.books[this.books.length - 1].id : 0;
    }

  addBook () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    if(title.trim() === '' || author.trim() === '') {
      const err = document.createElement('div');
      err.classList.add('error');
      err.textContent = "Please enter a title and an author";
      setTimeout(() => err.remove(), 3500);
      document.body.appendChild(err);
     }
      else if (this.books.some((book) => book.title === title)) {
        const err = document.createElement('div');
        err.classList.add('error');
        err.textContent = "This book already exists";
        setTimeout(() => err.remove(), 3500);
        document.body.appendChild(err);
      } else {
    const book = {id: ++this.lastId, title, author};
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
    title = '';
    author = '';
    this.displayAllBooks();
  }
}

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  displayAllBooks() {
    const bookList = document.getElementById('book_list');
    bookList.innerHTML = "";
    for (const book of this.books) {
      const bookListItem = document.createElement("li");
      bookListItem.innerHTML = `${book.title} <br /> ${book.author}`
      bookListItem.setAttribute('id', book.id);
      const line = document.createElement("hr");
      const btnRemove = document.createElement("button");
      btnRemove.classList.add('remove-btn')
      btnRemove.textContent = "Remove";
      btnRemove.addEventListener('click', () => {
        this.removeBook(book.id);
        this.displayAllBooks();
      });
      bookListItem.appendChild(btnRemove);
      bookList.appendChild(bookListItem);
      bookList.appendChild(line);
    }
  };
}

  const newBook = new Book();

const addBtn = document.getElementById('submit_btn')
const formElement = document.getElementById('form');

newBook.displayAllBooks();

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  newBook.addBook();
  newBook.displayAllBooks();
});
