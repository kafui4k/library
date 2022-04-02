const form = document.getElementsByTagName('form')[0];
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookRead = document.getElementById("read");
const errorMessage = document.createElement('span');
const formGroup1 = document.querySelector('.group1');
const formGroup2 = document.querySelector('.group2');
const formGroup3 = document.querySelector('.group3');


// Book constructor (Class)
class Book { // Class declaration
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

// myLibrary array []
let myLibrary = [
    {
        title: "The Atomic Habits",
        author: "James Clear",
        read: "Not Yet"
    },
    {
        title: "Steal like an Artiset",
        author: "Unknown",
        read: "Not Yet"
    }
];

// map over the array book - to get all books objects
const book = myLibrary.map((book) => {
    addBookToList(book);
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

// clear input fields
function clearFields() {
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#read").value = '';
}

// showAlerts for actions
function showAlerts(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    
    const aside = document.querySelector(".aside");
    const form = document.querySelector("#book-form");
    aside.insertBefore(div, form);

    // remove alert after a second
    setTimeout(() => document.querySelector(".alert").remove(), 1000);
}

document.querySelector(".book-list").addEventListener("click", function(e) {
    // call the removeBook function
    removeBook(e.target);
});

bookTitle.addEventListener('input', function(event) {
    // validate input field
    if (bookTitle.validity.valid) {
        errorMessage.className = "error";
        errorMessage.textContent = "";
        formGroup1.appendChild(errorMessage);
    } else {
        // show erro
        if (bookTitle.validity.valueMissing) {
            errorMessage.textContent = "Book Title is a required field!";
        } else if (bookTitle.validity.tooShort) {
            // if email address value is too short
            errorMessage.textContent = `
                Book Title should be at least ${bookTitle.minLength} characters;\nYou entered
                ${bookTitle.value.length}
            `;
        }

        errorMessage.className = 'error active';
        formGroup1.appendChild(errorMessage);
    }
    
});

bookAuthor.addEventListener('input', function(event) {
    if (bookAuthor.validity.valid) {
        errorMessage.className = "error";
        errorMessage.textContent = "";
        formGroup2.appendChild(errorMessage);
    } else {
        // show error
        if (bookAuthor.validity.valueMissing) {
            errorMessage.textContent = "Book Author is a required field!";
        } 
    
        errorMessage.className = 'error active';
        formGroup2.appendChild(errorMessage);
    }
});

bookRead.addEventListener('input', function(event) {
    if (bookRead.validity.valid) {
        errorMessage.className = "error";
        errorMessage.textContent = "";
        formGroup3.appendChild(errorMessage);
    } else {
        // show error
        if (bookRead.validity.valueMissing) {
            errorMessage.textContent = "Book Read? is a required field!";
        } 
    
        errorMessage.className = 'error active';
        formGroup3.appendChild(errorMessage);
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!bookTitle.validity.valid || !bookAuthor.validity.valid || !bookRead.validity.valid) {
        alert('Please provide data for input fields');

        // displayError();
    } else {
        // create new book copy
        const book = new Book(bookTitle.value, bookAuthor.value, bookRead.value);

        // add book to displayBookList
        addBookToList(book);

        // add book to myLibrary
        myLibrary.push(book);

        // showAlerts
        showAlerts("New Book added to your library", "success");

        // clear input fields
        clearFields();
    }

});