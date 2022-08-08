import { DateTime } from './modules/luxon.js';
import dateFormat from './modules/date.js';
import Book, { reload, load } from './modules/books.js';
import { listChange, addBookChange, contactChange } from './modules/nav-change.js';
import { bookAdditionError, bookAdditionSuccess } from './modules/book-validation.js';

const bookForm = document.forms['add-book-form'];
const addBook = document.querySelector('.add-book');
const bookList = document.querySelector('.book-list');
const navBar = document.querySelectorAll('nav a');
const date = document.querySelector('#date');

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

const bookObj = new Book();

bookList.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    const book = event.target.parentElement;
    bookObj.removeBook(book);
    bookObj.updateCollection(book);
    bookList.removeChild(book);
  }
});

addBook.addEventListener('click', (click) => {
  click.preventDefault();
  const bookTitleValue = bookForm.querySelector('#book-title').value;
  const bookAuthorValue = bookForm.querySelector('#book-author').value;
  if (bookTitleValue.length > 1 && bookAuthorValue.length > 1) {
    bookObj.createBook(bookTitleValue, bookAuthorValue);
    bookObj.updateCollection();
    bookList.innerHTML += `<li class='book-item'>
                            <p>
                                <span class="book-title">"${bookTitleValue}"</span> by <span class='book-author'>${bookAuthorValue}</span>
                            </p>
                            <button type='button' class='delete'>Delete</button>
                        </li>`;
    bookAdditionSuccess();
    document.querySelectorAll('input[type="text"]').forEach((element) => {
      element.value = '';
    });
  } else {
    bookAdditionError();
  }
});

reload();
load();

navBar.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    if (event.target === list) {
      listChange();
    } else if (event.target === addNew) {
      addBookChange();
    } else if (event.target === contact) {
      contactChange();
    }
  });
});

setInterval(() => {
  date.innerHTML = dateFormat(DateTime.now());
}, 200);