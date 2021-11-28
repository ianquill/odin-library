import Book from './book';
import {
  populateStorage,
  getStorage,
  clearStorage,
  checkStorage,
} from './storageController';

let myLibrary = [];

function getMyLibrary() {
    return myLibrary;
}

function setMyLibrary(newLibrary) {
    myLibrary = newLibrary;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    clearStorage();
    populateStorage(myLibrary);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
}

export { 
    myLibrary, 
    getMyLibrary,
    setMyLibrary, 
    addBookToLibrary,
    removeBook,
}