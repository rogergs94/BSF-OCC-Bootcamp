//Objects have properties, characteristics, features. Instead of using [], we use {}. firstname, lastname...are properties. We can add as many as we want


const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    hobbies: ["reading", "coding", "hiking"],

    greet: function() {    //greet is a method, it´s a function
        console.log ("Hello, my name is ", this.firstName); //"this" refers to the object itself
    } 
}

console.log (person.firstName);
console.log (person.age);

person.greet();

person.lastName = "Smith"; //We modify the first las name
console.log(person.lastName);

//How to add more properties --> We simply text the object.property
person.nationality = "American";

console.log (person.nationality);

//How to add more methods
person.introduce = function () {
    console.log (`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
}
person.introduce ();
//With ``we can use templates literal
//${} this means it can now access elements or variables inside out Javascript code.

//We can add objects in objects (nested objects).
//We create an object
const address = {
    street: '234 Main St',
    city: 'San Francisco',
    country: 'USA'
}
//we create a property for the first object called home address
person.homeAddress = address;
console.log(person.homeAddress.street);

//Object Destructuring --> it´s just extracting the propertis of a certain object.
const { firstName, lastName, age } = person //I´m extracting first name, last name and age from object "person". It won´t remove it.
console.log(firstName);