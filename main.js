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
  bookListElements.forEach((book) => {
    let bookListItem = document.createElement('li');
    const line = document.createElement('hr');
    bookListItem.innerHTML = `
    ${book.bookTitle}<br />
    ${book.bookAuthor} <br />
    `;
    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'Remove';
    bookList.appendChild(bookListItem);
    bookList.appendChild(btnRemove);
    bookList.appendChild(line);
  })
};

displayAllBooks();

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title_input').value;
  const bookAuthor = document.getElementById('author_input').value;
  addNewBook(bookTitle, bookAuthor);
});
