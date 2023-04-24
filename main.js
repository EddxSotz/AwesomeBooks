const formElement = document.getElementById('form');
const bookList = document.getElementById('book_list');

let bookListElements = JSON.parse(localStorage.getItem('books')) || [];




function addNewBook(bookTitle, bookAuthor){
  const newBook = {bookTitle, bookAuthor};
  bookListElements.push(newBook);
  localStorage.setItem('books', JSON.stringify(bookListElements));
  displayAllBooks();
};

function removeBook(){};

function displayAllBooks(){

};


formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title_input').value;
  const bookAuthor = document.getElementById('author_input').value;
  addNewBook(bookTitle, bookAuthor);
});