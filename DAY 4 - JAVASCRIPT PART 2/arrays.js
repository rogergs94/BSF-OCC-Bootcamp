//Topic: Introduction to Arrays

//Creating an array: index = it starts with number 0 (pipping = 0; goku = 1...); lenght = how many elements inside of the array.
let characters = ["pippin", "goku", "layla", "morgana", "aang"];

//Accessing array elements
console.log ("Character 1: ", characters[0]);
console.log ("Character 5: ", characters[4]);
console.log ("The last character: ", characters[characters.length - 1]); //if you aren´t sure about what the last element is.

//Modifying array elements
characters.push("sasuke"); //We want to add "sasuke" to the array "characters" throught push method
characters.pop ("sasuke"); //We want to remove "sasuke" from the array "characters" through pop method
characters[0] = "crybaby"; //To remove the element in position 0 in the array "pippin"

console.log ("Modified Array: ", characters);

//Array Iteration
for(let i = 0; i < characters.length; i++) {
    console.log('Character ', i+1, characters[i]);
}

characters.forEach(function(character){
    console.log(character)
}) //for each of the elements in the array, it´s going to execute a function

//Array Methods

// push
// pop
// indexOf --> it´s looking for the index of a certain value
console.log(characters.indexOf("layla"));
// includes --> it returns a boolean value (true or false)
console.log ("Includes a value: ", characters.includes("goku"));
// join --> what we want it to be separated
console.log ("Joined array: ", characters.join(" - "));
// slice --> it selects a portion of the array and returns a new array based of the initial array. It gives a new array.
console.log ("Sliced array: ", slicedArray = characters.slice(1, 4)); //it gets the index what we want to stop before (we select a part )
//1: from what index; 4: what index we stop.

// splice --> remove an element from the array
console.log ("Removed elements: ", characters.splice(0, 2)); //2: means how many elements I´m going to remove from position 0
console.log("Updated Array: ", characters);