import { list, bookListSection } from "../index.js";

export let bookCatalog = [];

export const reload = () => {
    if (localStorage.getItem('bookCatalog') === null) {
        bookCatalog = [];
    } else {
        bookCatalog = JSON.parse(localStorage.getItem('bookCatalog'));
    }
    list.classList.add('active');
    bookListSection.classList.add('show');
};