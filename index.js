import AddBookClass from './modules/addBook.js';
import DisplayBooksClass from './modules/displayBook.js';
import RemoveBook from './modules/removeBook.js';
import { DateTime } from './modules/luxon.min.js';

const form = document.getElementById('form');
const booksList = document.getElementById('book_list');
const messageField = document.getElementById('messageField');
const contactContainer = document.getElementById('contact');
const bookListNavLink = document.getElementById('nav-list');
const bookAddNavLink = document.getElementById('nav-add');
const contactNavLink = document.getElementById('nav-contact');
const currentDateTimeElement = document.getElementById('current-date-time');

let booksSaved = JSON.parse(localStorage.getItem('BooksList')) || []; // global variable to store from localStorage into array of objects

const addBooks = new AddBookClass();
const displayBooks = new DisplayBooksClass();
const removeBookItem = new RemoveBook();

displayBooks.showBooksMethod(booksSaved);
if (booksSaved.length === 0) {
  allBooks.innerHTML = 'You have no books in your list';
  allBooks.style.padding = '10px';
}

// Display date function
function displayCurrentDateTime() {
  const formattedDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED); 
  currentDateTimeElement.textContent = formattedDateTime;
}
// call display date on page load
displayCurrentDateTime();
// Refresh date and time every second
setInterval(displayCurrentDateTime, 1000);


// Listen when form is submitted and call addBook method with parameter then display all books..
// if not empty, and show error message is
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');

  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    addBooks.addBookMethod(booksSaved);
    booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
    displayBooks.showBooksMethod(booksSaved);
    messageField.textContent = 'Book added succesfully!';
    messageField.style.color = 'black';
  } else {
    messageField.textContent = 'Please enter a value';
    messageField.style.color = 'red';
  }  
});


// remove Book  action
booksList.addEventListener('click', (element) => {
  if (element.target.matches('.removeButton')) {
    const { index } = element.target.dataset;
    removeBookItem.removeBook(booksSaved, index);
    booksSaved = JSON.parse(localStorage.getItem('BooksList')) || [];
    displayBooks.showBooksMethod(booksSaved);
  }
});






// Show books' section
bookListNavLink.addEventListener('click', () => {
  booksList.classList.remove('hidden');
  form.classList.add('hidden');
  contactContainer.classList.add('hidden');
  contactContainer.classList.remove('flex');
});

// Show add section
bookAddNavLink.addEventListener('click', () => {
  booksList.classList.add('hidden');
  form.classList.remove('hidden');
  contactContainer.classList.add('hidden');
  contactContainer.classList.remove('flex');
  messageField.textContent = '';
});

// Show contactContainer
contactNavLink.addEventListener('click', () => {
  booksList.classList.add('hidden');
  form.classList.add('hidden');
  contactContainer.classList.remove('hidden');
  contactContainer.classList.add('flex');
});


