let myLibrary = []

// sample books
myLibrary.push(new Book("JK Rowling", "Harry Potter", 579, true))
myLibrary.push(new Book("JRR Tolkien", "Return of the King", 743, true))
myLibrary.push(new Book("Mr. Author", "Book", 399, false))
myLibrary.push(new Book("Dr Seuss", "Go Dog, Go!", 15, true))

const table_body = document.getElementsByTagName('tbody')[0];
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const readStatusInput = document.getElementById('readStatus');

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
}

function addBookToLibrary() {
   myLibrary.push(new Book(authorInput.value, titleInput.value, pagesInput.value, readStatusInput.value)); 
   render();
   closeForm();
}

function render() {
    table_body.innerHTML = ""
    for (var i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        table_body.innerHTML += `<tr><td>${book.author}</td><td>${book.title}</td><td>${book.pages}</td><td><button onclick="toggleReadStatus(${i})" type="submit">${book.readStatus}</button></td><td><button onclick="removeBook(${i})" type='submit'>Remove</button></td></tr>`;
    }
}

function openForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("new-book-button").style.display = "none";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("new-book-button").style.display = "block";
}

function removeBook(index) {
    myLibrary.splice(index, 1); 
    render();
}

function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus(); 
    render();
}

render()
