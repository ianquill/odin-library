import { myLibrary } from './library';
// import getter + setter instead? might need to

function populateStorage(library) {
  localStorage.setItem("myLibrary", JSON.stringify(library));
  console.log("populated storage");
  console.log(localStorage.getItem("myLibrary")); 
}

function getStorage() {
    let jsonString = localStorage.getItem("myLibrary");
    let retrievedObject = JSON.parse(jsonString);
    myLibrary = retrievedObject;
    // disconnected here; should set library.myLibrary
}
    
function clearStorage() {
    localStorage.clear();
}
  
function checkStorage() {
  if (!localStorage.getItem("myLibrary")) {
      populateStorage();
  } else {
    getStorage();
  }
}

export { 
  populateStorage,
  getStorage, 
  clearStorage, 
  checkStorage,
};