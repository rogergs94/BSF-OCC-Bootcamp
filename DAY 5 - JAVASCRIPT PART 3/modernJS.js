// Arrow functions --> it´s a concise way of how we write functions. They have the next form: () => {}

const greet = (name) => {
    console.log(name);

}

greet("Ron");

//Another example:
const square = (a) => a * a;
console.log(square(4));

//The function below is the same result as the one above but larger.

function squareSecond (a) {
    a = a * a;
    return a;
    console.log (a);
}
squareSecond (4);




//Spread and Rest Operators

//Rest Operator: It´s useful if you have a lot of arguments and you dont know how many arguymets will be put in or passed into the function.
function restOperator (first, ...restOfArgs) { // ...restOfArgs: it will put 2, 3, 4... It will be an array. The most important thing is the ...
    console.log (first);
    console.log (restOfArgs);
}

restOperator("one", "two", "three", "four", "five"); //It will take the first parameter (one) and the rest will be in an array.

// Spread Operator: I´m spreading the parameters into the arguments. It´s the opposite of rest operator.
function sum(x, y, z) {
    return x+y+z;
}

const numbers = [1, 2, 3];
//We want to spread the values above into the x, y z
//console.log(sum(numbers[0], numbers[1])); //It´s very tedious if you have multiple values... Instead we can do:
console.log(sum(...numbers)); //It will only take the first three elements.

//--------

// Common Built-in Methods

// Array
// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0) //This is where we store the numbers that we will filter out this array
console.log(even);

const odd = nums.filter((num) => num % 2 != 0) //This is where we store the numbers that we will filter out this array
console.log(odd);

// String Built-in Methods
// Split we split a string intro an array of strings
const message = "Hello, world!";
const words = message.split(", ") //We create a constant variable to store those/ ", " means what´s the method to split the string (the separator)
console.log (words); 

// Includes: similar to the string but returns a boolean value to check if an element or word is included in the string
const sentence = "The quick brown fox jumps over the lazy dog.";
const containWord = sentence.includes("fox"); // It will return True or False whether if the word is included in the sentence. It´s case sensitive.
console.log (containWord);

// lenght (it´s not a method per se, it´s a property, we don´t have to put parenthesis). It will check the lenght or number of characters (include spaces)
const str = "Welcome to Modern JS Features!";
console.log (str.length);

// to lowercase and to uppercase = just convert all the characters into lowercase or uppercase
let string = "HELLO world";
console.log(string.toLowerCase()); 
console.log(string.toUpperCase());

// trim: it will trim out the spaces before and after the string. Really good for passwords.
let str2 = "   I love JavaScript!   ";
console.log(str2.trim());

// ------------

// Math Methods: easy to calculate.
// max and min 
const maxNumber = Math.max(10, 5, 20);//Math is already an object in JS 
console.log (maxNumber); 
const minNumber = Math.min (10, 5, 20);
console.log (minNumber);

// round : it will round a number
console.log(Math.round(3.6)); //We access the math object first

//floor: it will round down
console.log(Math.floor(3.9));

//ceil: it will round up
console.log(Math.ceil(3.1));

//random
console.log(Math.random()); //It will give a number from 0 to 1. When we want int numbers, we use nested methods:
console.log(Math.random()*10);

//nested math methods
console.log(Math.floor(Math.random() * 100)); //It will round down a random number from 0 to 100.

// Other 
// to fixed: how many number after the decimal we want
const price = 40.2567.toFixed(2) // this will round the number
console.log (price);

// date : it shows the current date as a TimeStamp
const currentDate = new Date(); 
console.log (currentDate);

const christmas = new Date(2024, 11, 24); //it is 11 because january is number 0
console.log(christmas);