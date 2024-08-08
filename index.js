// Activity 3 Nested Objects
// TASK 5 create a nested object representing a library with properties like name and books(an array of book objects) and log the library object to the console



const library = {
    name :"Sadiq library",
    books : [
        {
          title:"English"
        },
        {
            title :"Science"
        },
        {title : "urdu"}
    ]
}

console.log(library)

// TASK 6  Access and log the name of the library and titles of all books in library


console.log("name of library ", library.name)

console.log(library.books.map((item) => item.title))


// Acitivity 4 The This keyword

// TASK 7 Add a method to the book object that used the this keyword to return a string with the book's title and log the result of calling this method


const book = {
    title: "Holy Quran",
    author: "Allah Almighty",
    year :"609 CE",
    getTitle: function () {
        return `Title : ${this.title}`
    }
}

console.log(book.getTitle())



//  Activity 5 Object Iteration


// TASK 8 Use a for...in loop to iterate over the properties of the book object and log each property and its value

for (let prop in book) {
    console.log(prop, " => " , book[prop])
    
}



// TASk 9 Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log("Keys : " ,Object.keys(book) , " Values : ", Object.values(book))

