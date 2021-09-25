// DATA

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

const mainContainer = document.querySelector(".main-container");

function refreshLibrary() {
    myLibrary.forEach((Book) => {
        const div = document.createElement('div');
        div.classList.add("card");
        const index = myLibrary.indexOf(Book)
        div.setAttribute("data-index", index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.classList = "deleteButton";
        // working on removing book from database and DOM
        deleteButton.addEventListener('click', () => {
            removeBook(index);
            clearLibrary();
            refreshLibrary();
        });

        div.appendChild(deleteButton);



        for (const key in Book) {
            const subDiv = document.createElement('div');
            subDiv.textContent = Book[key];
            div.appendChild(subDiv);
        }

        mainContainer.appendChild(div);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
}

function clearLibrary() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
};

refreshLibrary();

// BUTTON

const addButton = document.getElementById("addButton");



addButton.addEventListener('click', () => {

    if (document.getElementById("pop-up") === null) {

        const popUp = document.createElement('div');
        popUp.classList.add("pop-up");
        popUp.id = "pop-up";
    
        const titleInput = document.createElement('input');
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Title:"
        titleInput.id = "title";
        popUp.appendChild(titleLabel);
        popUp.appendChild(titleInput);
    
        const authorInput = document.createElement('input');
        const authorLabel = document.createElement('label');
        authorLabel.setAttribute("for", "author");
        authorLabel.textContent = "Author:";
        authorInput.id = "author";
        popUp.appendChild(authorLabel);
        popUp.appendChild(authorInput);
    
        const pagesInput = document.createElement('input');
        const pagesLabel = document.createElement('label');
        pagesLabel.setAttribute("for", "pages");
        pagesLabel.textContent = "Pages:"
        pagesInput.id = "pages";
        popUp.appendChild(pagesLabel);
        popUp.appendChild(pagesInput);
    
        const readInput = document.createElement('input');
        const readLabel = document.createElement('label');
        readLabel.setAttribute("for", "read");
        readLabel.textContent = "Have you read it?"
        readInput.id = "read";
        readInput.type = "checkbox";
        popUp.appendChild(readLabel);
        popUp.appendChild(readInput);
    
        const submitButton = document.createElement('button');
        submitButton.id = "submit";
        submitButton.textContent = "Submit";
        submitButton.addEventListener('click', () => {
            // submit form?? or get value from all other inputs
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
            clearLibrary();
            refreshLibrary(); 
        })
    
        popUp.appendChild(submitButton);

        const cancelButton = document.createElement('button');
        cancelButton.id = "cancel";
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener('click', () => {
            popUp.remove();
        })

        popUp.appendChild(cancelButton);

        mainContainer.appendChild(popUp);
    }


})

function clearPopUp(element) {
    popUp.remove();
}