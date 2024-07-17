// Activity 1  => Variable Declaration

// Task1 declare a variable using var assign a value to it and log to console
var age = 22
console.log(age)

// Task2 declare a variable using let assign a value to it and log to console
let rollNo = "fa2282"
console.log(rollNo)

// Activity 2 Constant declaration


// TASK 3 declare a variable using const assign a boolean value to it and log to console

const val = false
console.log(val) 

// Activity 3 Data Types
// TASK 4 Create variables of different data types and log their types uisng typeof() operator

var a = "naz"
var b = 22
var c = true
var d = [3, 5, 2]
var e = {
    name: "aiman",
    age :22
}

console.log(`a :${typeof (a)} b:${typeof (b)} c:${typeof (c)} d:${typeof (d)} e:${typeof (e)}`)


// Activity 4 Reassigning variables
// TASK 5 declare a variable using let assign it an initial value , reassing it  and log both values to console

let num = 3
console.log(num)
num = 5
console.log(num)


// Acitivity 5 understanding const

// TASK 6 Try reassigning a variable declared with const and observe the error
const countryName = "pakistan"
countryName = "india"

console.log(countryName)


//Script 
/*
const is immutable which meant by that we can not re declare or reinitialize it
let is mutable which meant by that we can reinitialize it but we can't redeclare the variable declared with let
can reinitialize and redeclare the variable declared with var 

*/