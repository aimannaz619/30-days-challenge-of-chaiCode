// Activity 1 Object Creation and Access
// Task 1 Create an object representing a book with properties like title , author and year and log the object to the console

const book = {
  title: "The hundred",
  author: "Mickle Hart",
  year: 2013,
};

console.log(book);

// TASK 2 Access and log the title and author properties of the book object
console.log("title : ", book.title, "author : ", book.author);

// Activity 2 Object Methods

// TASK 3 Add a method to the book object that returns a string with the book's title and the author , and log the result of calling this method

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function () {
    return `${this.title} by ${this.author}` 
}

const book1 = new Book("The hundred ", "mickle hart")
console.log(book1.getDetails())

// TASK 4 Add a method to the book object that takes a parameter(year) and updates the book's year property , then log the updated object

function updateProperty(year) {
    book1.year = year
    return book1
}
(updateProperty(2010))
console.log(book1, "book 1")


