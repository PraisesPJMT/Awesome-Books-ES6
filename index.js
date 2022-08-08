const bookForm = document.forms['add-book-form'];
const addBook = document.querySelector('.add-book');
const bookList = document.querySelector('.book-list');
// const bookTitle = document.querySelector('#book-title');
const navBar = document.querySelectorAll('nav a');

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

const bookListSection = document.querySelector('.all-books');
const addBookSection = document.querySelector('.add-books');
const contactSection = document.querySelector('.contacts');

const errorMessage = bookForm.querySelector('.input-error');

let bookCatalog = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    createBook = (title, author) => {
      bookCatalog.push({ title, author });
    }

    removeBook = (book) => {
      const title = book.querySelector('.book-title').innerHTML;
      const filt = bookCatalog.filter((book) => title.toLowerCase() === book.title.toLowerCase());
      const filtIndex = bookCatalog.indexOf(filt[0]);
      bookCatalog.splice(filtIndex, 1);
    }

    updateCollection = () => {
      localStorage.setItem('bookCatalog', JSON.stringify(bookCatalog));
    }
}

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
    errorMessage.classList.remove('red');
    errorMessage.classList.add('green');
    errorMessage.innerHTML = 'New Book Added';
    document.querySelectorAll('input[type="text"]').forEach((element) => {
      element.value = '';
    });
  } else {
    errorMessage.classList.add('red');
    errorMessage.classList.remove('green');
    errorMessage.innerHTML = 'Please the Book Title or Author should not be empty';
  }
});

const reload = () => {
  if (localStorage.getItem('bookCatalog') === null) {
    bookCatalog = [];
  } else {
    bookCatalog = JSON.parse(localStorage.getItem('bookCatalog'));
  }
  list.classList.add('active');
  bookListSection.classList.add('show');
};
reload();

bookCatalog.forEach((book) => {
  bookList.innerHTML += `<li class='book-item'>
        <p>
        <span class="book-title">"${book.title}"</span> by <span class='book-author'>${book.author}</span>
    </p>
    <button type='button' class='delete'>Delete</button>
</li>`;
});

navBar.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    if (event.target === list) {
      list.classList.add('active');
      addNew.classList.remove('active');
      contact.classList.remove('active');
      bookListSection.classList.add('show');
      addBookSection.classList.remove('show');
      contactSection.classList.remove('show');
    } else if (event.target === addNew) {
      list.classList.remove('active');
      addNew.classList.add('active');
      contact.classList.remove('active');
      bookListSection.classList.remove('show');
      addBookSection.classList.add('show');
      contactSection.classList.remove('show');
    } else if (event.target === contact) {
      list.classList.remove('active');
      addNew.classList.remove('active');
      contact.classList.add('active');
      bookListSection.classList.remove('show');
      addBookSection.classList.remove('show');
      contactSection.classList.add('show');
    }
  });
});