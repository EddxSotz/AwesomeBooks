const form = document.getElementById('form');
const allBooks = document.getElementById('book_list');
const messageField = document.getElementById('messageField');

let bookList = JSON.parse(localStorage.getItem('BooksList')) || []; // global variable to store from localStorage

// Book class
class Book {
  constructor() {
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
  }

  // Remove book function takes 'book' parameter from 'displayAllBooks' function and
  // removes only that element and update local Storage
  removeBook(book) {
    bookList = bookList.filter((element) => element !== book);
    localStorage.setItem('BooksList', JSON.stringify(bookList));
    this.displayAllBooks();
  }

  // Clears any previous book list and loops through each book element creating the elements and
  // calling the 'removeBook' function when user clicks the remove btn
  displayAllBooks() {
    allBooks.innerHTML = '';
    bookList.forEach((book) => {
      const bookListItem = document.createElement('li');
      bookListItem.innerHTML = `"${book.bookTitle}" by ${book.bookAuthor}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerHTML = 'Remove';
      btnRemove.className = 'removeButton';
      btnRemove.addEventListener('click', () => this.removeBook(book));
      bookListItem.appendChild(btnRemove);
      allBooks.appendChild(bookListItem);
      this.bookTitle.value = '';
      this.bookAuthor.value = '';
    });
  }

  // receive the parameters and create an object from them to push it to the
  // global 'bookList' variable and update local Storage then display all books
  addBook(bookTitle, bookAuthor) {
    const newBook = { bookTitle, bookAuthor };
    bookList.push(newBook);
    localStorage.setItem('BooksList', JSON.stringify(bookList));
    this.displayAllBooks();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}

const newBook = new Book();
newBook.displayAllBooks(); // display all books by default

// Listen when form is busmitted and call addBook function with parameters then display all books
// if not empty and show error message if it is
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');

  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    newBook.addBook(bookTitle.value, bookAuthor.value);
    bookList = JSON.parse(localStorage.getItem('BooksList')) || [];
    newBook.displayAllBooks();
    messageField.textContent = '';
  } else {
    messageField.textContent = 'Please enter a value';
  }
});

// Date


//Change format
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const dateContainer = document.getElementById('dateContainer');
let currentDate = new Date();
dateContainer.innerHTML = currentDate.toLocaleString('en-US');

