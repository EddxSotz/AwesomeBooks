export default class AddBookClass {
  constructor() {
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
  }

  addBookMethod(books) {
    this.booksList = books;
    this.bookObject = {
      title: this.titleInput.value,
      author: this.authorInput.value,
    };
    this.booksList.push(this.bookObject);
    localStorage.setItem('BooksList', JSON.stringify(this.booksList));
    this.titleInput.value = '';
    this.authorInput.value = '';
  }
}