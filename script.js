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

const mainContainer = document.querySelector(".main-container");

function refreshLibrary() {
    myLibrary.forEach((Book) => {
        const div = document.createElement('div');
        div.classList.add("card");
        // div.textContent = Book.info();
        for (const key in Book) {
            const subDiv = document.createElement('div');
            subDiv.textContent = Book[key];
            div.appendChild(subDiv);
        }

        mainContainer.appendChild(div);
    });
}

refreshLibrary();

// BUTTON

const addButton = document.querySelector("button");

addButton.addEventListener('click', () => {
    const popUp = document.createElement('div');
    popUp.classList.add("pop-up");

    const titleInput = document.createElement('input');
    titleInput.id = "title";
    popUp.appendChild(titleInput);

    const authorInput = document.createElement('input');
    authorInput.id = "author";
    popUp.appendChild(authorInput);

    const pagesInput = document.createElement('input');
    pagesInput.id = "pages";
    popUp.appendChild(pagesInput);

    const readInput = document.createElement('input');
    readInput.id = "read";
    readInput.type = "checkbox";
    popUp.appendChild(readInput);

    const submitButton = document.createElement('button');
    submitButton.id = "submit";
    submitButton.textContent = "Submit";
    submitButton.addEventListener('click', () => {
        // submit form?? or get value from all other inputs
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        refreshLibrary();

        
    })
    popUp.appendChild(submitButton);



    mainContainer.appendChild(popUp);
})