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

document.querySelector("#book-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const read = document.querySelector("#read").value;

    // validate user input
    if (title === "" || author === "" || read === "") {
        alert("please provide input for all fields.")
    } else {
        // create new book copy
        const book = new Book(title, author, read);

        // add book to displayBookList
        addBookToList(book);

        // add book to myLibrary
        myLibrary.push(book);
    }
});

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
        <td><a href="#" class="delete">Remove</td>
    `;

    tbody.appendChild(row);
}

// remove book
function removeBook(value) {
    if (value.className === "delete") {
        value.parentElement.parentElement.remove();
    }
}

document.querySelector(".book-list").addEventListener("click", function(e) {
    // call the removeBook function
    removeBook(e.target);
});