const bookList = document.querySelector('.book-list');
const list = document.querySelector('#list');
const bookListSection = document.querySelector('.all-books');
let bookCatalog = [];

export const reload = () => {
  if (localStorage.getItem('bookCatalog') === null) {
    bookCatalog = [];
  } else {
    bookCatalog = JSON.parse(localStorage.getItem('bookCatalog'));
  }
  list.classList.add('active');
  bookListSection.classList.add('show');
};

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

export const load = () => {
  bookCatalog.forEach((book) => {
    bookList.innerHTML += `<li class='book-item'>
        <p>
        <span class="book-title">"${book.title}"</span> by <span class='book-author'>${book.author}</span>
    </p>
    <button type='button' class='delete'>Delete</button>
</li>`;
  });
};

export default Book;