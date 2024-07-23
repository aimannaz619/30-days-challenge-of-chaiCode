// Arrays

// Acitivity 1  Array Creation and Access

// TASK 1 Create an array of numbers from 1 to 5 and log the array to the console

console.log("?");
const array1 = [1, 2, 3, 4];
console.log(array1);

// TASK 2 Access the first and last element of the array and log them to the console

const firstElement = array1[0];
const lastElement = array1[array1.length - 1];
console.log(firstElement);
console.log(lastElement);

// Activity 2 Array Methods (Basic)

// TASK 3 use the push method to add a new number to the end of the array and log the updated array
array1.push(10);
console.log(array1, "updated array");

// TASK 4 use the pop method to remove the last element from the array and log the updated array

array1.pop();
console.log(array1);

// TASK 4 use the shift method to remove the first element from the array and log the updated array

array1.shift();
console.log(array1);

// TASK 5 use the unshift method to add a new number to the beginning of the array and log the updated array

array1.unshift(12);

// Acitvity 3  Array Methods(intermediate)

// TASK 7 use the map method to create a new array where each number is doubled and log the new array

const doubledArray = array1.map((n) => n * n);
console.log(doubledArray, "doubledArray");

// TASK 8 use the filter method to create a new array with only even numbers and log the new array

const filteredArray = array1.filter((n) => n % 2 === 0);
console.log(filteredArray, "filteredArray");

// TASK 9 use the reduce method to calculate the sum of all numbers in the array and log the result

console.log(array1, "array 1");
const sum = array1.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);

console.log(sum, "sum");

// Activity 4 Array Iteration
// TASK 10  use a for loop to iterate over the array and log each element to the console

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i], `number ${i + 1}`);
}

// TASK 11 use foreach loop to iterate over the array and log each element to the console

array1.forEach((element, index) => {
  console.log(element, `element ${index}`);
});

// Activity 5 Multi-dimensional Arrays

// TASK 12 Create a two-dimensional array(matrix) and log the entire array to the conosle

const array2 = [
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2);

// TASK 13 Acess and log the specific element from the multidimensional array

function accessElement(row, col) {
   
  
    return array2[row][col];
  
}

console.log(accessElement(3, 0) , "array 2");
