// Activity 1  Function Declaration

// TASK 1 write a function to check if a number is even / odd and log the result to console

function findEvenOddNumber(num) {
    const result = num % 2 === 0 ? "Even" : "Odd" 
    console.log("The number is " + result) 
}
var number = 35
findEvenOddNumber(number)


// TASK 2 write a function to calculate the square of a number and return the result

function calculateSquare(num) {
    return num*num
}

console.log(calculateSquare(3))


// Activity 2  Function Expression

// TASK 3 Write a function expression to find the maximum of two numbers and log the result to console

const maximumNumber = function findMaximumNumber(num1 , num2){
return num1 > num2 ? num1 : num2
}

console.log(`The maximum number is ${maximumNumber(27,9)}`)


// TASK 4 Write a function to concatenate two strings and log the result

const concatenateNumbers = (string1 , string2) => {
    return string1 + string2
}

console.log(concatenateNumbers("aiman", "naz"))


// Acitivity 3  Arrow Functions

// TASK 5 Write an arrow function to calculate the sum of two numbers and return the result

const calculateSum = (num1 , num2) => {
    return num1 + num2
}

console.log(calculateSum(2, 6))

const checkCharacter = (string , char) => {
     return string.includes(char)
}
 
console.log(checkCharacter("aiman", "i"))


// Activity 4 Function parameters and default values

// TASK 7 Write a funciton that takes two parameters and return their product . Provide the default value of second parameter

function calculateProduct(num1, num2 = 5) {
    return num1* num2
}

console.log(calculateProduct(3))

// TASK 8  Write a funciton that takes a person's  name and age and return a greetings message . Provide the default value of age

function message(name, age = 18) {
    return `Hello ${name} , you are ${age} years old`
}

console.log(message("aiman"))


// Activity 5 Higher order functions

// TASK 9 write a function that takes another function and a number and calls function that many times

function higherOrderFunction(f1 , number) {
    for (let i = 0; i < number; i++){
        f1()
    }
}

higherOrderFunction(() => {
    console.log("callback function")
}, 2)


// TASK 10 write a higher order function that takes two functions and a value. Applies the first function to the value and second function to the result

function HigherOrderFunction2(f1, f2 , val) {
    const result = f1(val)
   return f2(result)
   
}

HigherOrderFunction2((num) => {
return num*num
}, (result) => {
    console.log(result)
}, 4)

