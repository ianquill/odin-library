let myLibrary = [];
const mainContainer = document.querySelector(".main-container");

function populateStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    console.log("populated storage");
    console.log(localStorage.getItem("myLibrary"));
}

function getStorage() {
    let jsonString = localStorage.getItem("myLibrary");
    let retrievedObject = JSON.parse(jsonString);
    myLibrary = retrievedObject;
}

function clearStorage() {
    localStorage.clear();
}

if (!localStorage.getItem("myLibrary")) {
    populateStorage();
} else {
    getStorage();
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    clearStorage();
    populateStorage();
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function refreshLibrary() {
    myLibrary.forEach((Book) => {
        const div = document.createElement('div');
        div.classList.add("card");
        const index = myLibrary.indexOf(Book)
        div.setAttribute("data-index", index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.classList = "deleteButton";
        deleteButton.addEventListener('click', () => {
            removeBook(index);
            clearLibrary();
            refreshLibrary();
            clearStorage();
            populateStorage();
        });

        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const isRead = document.createElement('input');
        const isReadLabel = document.createElement('label');

        titleDiv.classList.add("title");
        isRead.classList.add("isRead");
        isReadLabel.setAttribute("for", "isRead");
        isRead.setAttribute("type", "checkbox");
        if (Book.read) {
            isRead.checked = true;
            console.log(Book.read);
        } else {
            isRead.checked = false;
        }
        
        isRead.id = "isRead";
        isRead.onchange = function(){
            Book.read = isRead.checked;
            clearStorage();
            populateStorage();
        }
        
        titleDiv.textContent = Book.title;
        authorDiv.textContent = "by " + Book.author;
        pagesDiv.textContent = Book.pages + " pages";
        isReadLabel.textContent = "Have you read this?";

        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(pagesDiv);
        div.appendChild(isReadLabel);
        div.appendChild(isRead);
        div.appendChild(deleteButton);
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

function createPopup () {
    if (document.getElementById("pop-up") === null) {
    
        const popUp = document.createElement('form');
        popUp.classList.add("pop-up");
        popUp.id = "pop-up";
    
        const titleInput = document.createElement('input');
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Title:"
        titleInput.id = "title";
        // titleInput.setAttribute("minlength", "1");
        titleInput.required = true;
        popUp.appendChild(titleLabel);
        popUp.appendChild(titleInput);

        // not sure if I'm going to need this 
        // titleInput.min = 0;
        titleInput.addEventListener('input', () => {
            if (!titleInput.checkValidity()) {
                titleInput.setCustomValidity('Please include a title of at least one (1) character in length.');
            } else {
                titleInput.setCustomValidity('');
            }
        })

        const authorInput = document.createElement('input');
        const authorLabel = document.createElement('label');
        authorLabel.setAttribute("for", "author");
        authorLabel.textContent = "Author:";
        authorInput.id = "author";
        authorInput.required = true;
        popUp.appendChild(authorLabel);
        popUp.appendChild(authorInput);
    
        const pagesInput = document.createElement('input');
        const pagesLabel = document.createElement('label');
        pagesLabel.setAttribute("for", "pages");
        pagesLabel.textContent = "Pages:"
        pagesInput.id = "pages";
        pagesInput.required = true;
        popUp.appendChild(pagesLabel);
        popUp.appendChild(pagesInput);
    
        const readInput = document.createElement('input');
        const readLabel = document.createElement('label');
        readLabel.setAttribute("for", "read");
        readLabel.textContent = "Have you read it?"
        readInput.id = "read";
        readInput.classList.add("isRead");
        readInput.type = "checkbox";
        popUp.appendChild(readLabel);
        popUp.appendChild(readInput);
    
        const submitButton = document.createElement('button');
        submitButton.id = "submit";
        submitButton.classList.add("popUpButton");
        submitButton.textContent = "Submit";

        // make this check all of the form
        submitButton.addEventListener('click', () => {
            if (titleInput.checkValidity()){
                addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
                clearLibrary();
                refreshLibrary(); 
            }
        });
    
        popUp.appendChild(submitButton);
    
        const cancelButton = document.createElement('button');
        cancelButton.id = "cancel";
        cancelButton.classList.add("popUpButton");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener('click', () => {
            popUp.remove();
        })
    
        popUp.appendChild(cancelButton);
    
        mainContainer.appendChild(popUp);
    }

}

addButton.addEventListener('click', () => {
    createPopup();
})

function clearPopUp(element) {
    popUp.remove();
}
