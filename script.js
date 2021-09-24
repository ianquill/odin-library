// DATA

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return (title + " by " + author + ", " + pages + " pages, " + read + ".");
    // }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 182, true);
addBookToLibrary("Nineteen Eighty-Four", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("poop book", "eleanor bray", 182, false);
addBookToLibrary("pee book 2: comic edition", "eleanor rigby", 666, true);

console.table(myLibrary);

// function that loops through myLibrary, creating new DIVs and populating them with the data

// for each loop with a for in loop within it

const body = document.querySelector("body");

myLibrary.forEach((Book) => {
    const div = document.createElement('div');
    // div.textContent = Book.info();
    for (const key in Book) {
        const subDiv = document.createElement('div');
        subDiv.textContent = Book[key];
        div.appendChild(subDiv);
    }

    body.appendChild(div);
});