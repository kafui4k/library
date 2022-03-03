// Book constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

// myLibrary array []
let myLibrary = [
    {
        title: "The Atomic Habits",
        author: "James Clear",
        read: false
    },
    {
        title: "Steal like an Artiset",
        author: "Unknown",
        read: false
    }
];

// map over the array book - to get all books objects
const book = myLibrary.map((book) => {
    addBookToList(book);
});;

// add a new book
const title = prompt("Book Title", "");
const author = prompt("Author name", "");
const read = prompt("Read?", "");

// validate user input
if (title === "" || author === "" || read === "") {
    alert("please provide input for all fields.")
} else {
    // create new book
    const book = new Book(title, author, read);

    // add book to displayBookList
    addBookToList(book);

    // add book to myLibrary
    myLibrary.push(book);
}

// display book
function addBookToList(book) {
    // query for the book-list tbody
    const tbody = document.querySelector('.book-list');
    
    // create a row element
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.read}</td>
    `
    tbody.appendChild(row);
}

// remove book