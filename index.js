//  Activity 1 Template Literals
// TASK 1 Use template literals to create a string that includes variables for a person's name and age and log the string to the console

const name = "Aiman";
const age = 22;
let str;

if (age < 18) {
  str = `Hello ${name} your age is ${age} years , so you are not eligible for driving because its required age is 18 years`;
} else {
  str = `Hello ${name} you are eligible for driving`;
}

console.log(str);

// TASK 2 Create a multi-line string using template literals and log it to the console

const multilineString = `Hello ${name} 
Welcome to our portal,
If you have any query
`;

console.log(multilineString);

// Activity 2 Destructuring
// TASK 3 Use array destructuring to extract the first and second elements from an arry of numbers and log them to the console

const numberArray = [1, 4, 6, 2];

let [n1, , n2] = numberArray;
console.log(n1);
console.log(n2);

// TASK 4  Use object destrucutring to extract the title and author from a book object and log them to the console

const book = {
  title: "The Holy Quran",
  author: "Allah Almighty",
};

let { title, author } = book;
console.log(title);

// Activity 3 Spread and Rest Operators
// TASK 5 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console

const names = ["Aiman", "Fatima", "Natasha"];

const newArray = [...names, "Ayesha", "Iqra"];

console.log(newArray);

//  TASK 6 Use the rest operator in a function to accept an arbitrary number of arguments , sum them and return the result

function argumentsSum(...numbers) {

    return numbers.reduce((curr, n) => {
        
        return curr = curr+n
    },0)

}

console.log(argumentsSum(1, 5, 2));


//  Activity 4 Default Parameters
// TASK 7 Write a function that takes two parameters and returns their product , with the second parameter having a default value of 1 . log the result of calling this function with and without the second parameter


function calculateProduct(par1, par2=1) {
    return par1*par2
}

console.log(calculateProduct(2, 5))
console.log(calculateProduct(2))

// Activity 5 Enhance Object Literals

// TASK 8  Use enhanced object literal to create an object with methods and properties and log the object to the console

function printName() {
  console.log(this.personName , )
}
const personName = "Aiman"
const personAge = 22
const personProfession = "Associate software engineer"


const obj = {
  personName,
  personAge, 
  personProfession,
  printName

}

obj.printName()

//  Create an object with computed property names based on the variables and log the object to the console

const key1 = 'title'
const key2 = 'author'
const key3 = 'year'


const book2 = {
  [key1]: "Quran",
  [key2]: "Allah Almighty",
  [key3]: 609
  
}

console.log(book2)