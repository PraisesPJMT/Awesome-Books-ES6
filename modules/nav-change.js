const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

const bookListSection = document.querySelector('.all-books');
const addBookSection = document.querySelector('.add-books');
const contactSection = document.querySelector('.contacts');

export const listChange = () => {
  list.classList.add('active');
  addNew.classList.remove('active');
  contact.classList.remove('active');
  bookListSection.classList.add('show');
  addBookSection.classList.remove('show');
  contactSection.classList.remove('show');
};

export const addBookChange = () => {
  list.classList.remove('active');
  addNew.classList.add('active');
  contact.classList.remove('active');
  bookListSection.classList.remove('show');
  addBookSection.classList.add('show');
  contactSection.classList.remove('show');
};

export const contactChange = () => {
  list.classList.remove('active');
  addNew.classList.remove('active');
  contact.classList.add('active');
  bookListSection.classList.remove('show');
  addBookSection.classList.remove('show');
  contactSection.classList.add('show');
};