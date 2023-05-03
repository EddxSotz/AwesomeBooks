export default class DisplayBooksClass {
  constructor() {
    this.bookList = document.getElementById('book_list');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
  }

  showBooksMethod(books) {
    this.bookList.textContent = '';
    for (let i = 0; i < books.length; i += 1) {
      const bookItem = document.createElement('li');
      const removeButton = document.createElement('button');

      bookItem.innerHTML = `"${books[i].title}" by ${books[i].author}`;
      removeButton.textContent = 'Remove Book';
      removeButton.className = 'removeButton';
      removeButton.setAttribute('data-index', `${i}`);

      bookItem.appendChild(removeButton);
      this.bookList.appendChild(bookItem);
    }
  }
}