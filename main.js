const formElement = document.getElementById('form');
const bookList = document.getElementById('book_list');

let bookListElements = JSON.parse(localStorage.getItem('books')) || [];




function addNewBook(bookTitle, bookAuthor){
  const newBook = {bookTitle, bookAuthor};
  bookListElements.push(newBook);
  localStorage.setItem('books', JSON.stringify(bookListElements));
  displayAllBooks();
};

function removeBook(book){
  bookListElements = bookListElements.filter(element => element !== book);
  localStorage.setItem('books', JSON.stringify(bookListElements));
  displayAllBooks();
};

function displayAllBooks(){
    bookList.innerHTML = '';
    bookListElements.forEach((book) => {
    let bookListItem = document.createElement('li');
    const line = document.createElement('hr');
    bookListItem.innerHTML = `
    ${book.bookTitle}<br />
    ${book.bookAuthor} <br />
    `;
    const btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'Remove';
    btnRemove.addEventListener('click', () => removeBook(book));
    bookList.appendChild(bookListItem);
    bookList.appendChild(btnRemove);
    bookList.appendChild(line);
  })
};

displayAllBooks();

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title_input');
  const bookAuthor = document.getElementById('author_input');
  addNewBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = '';
  bookAuthor.value = '';
});
