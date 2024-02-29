//Inheritance

//Parent class

class Animal {
    constructor(name) {
        this.name = name;
    }
    // Create a method
    eat() {
        console.log(`${this.name} is eating.`);
    }

}
//Create a child class Dog
class Dog extends Animal { //extends will be followed by the class we want to inheritate the new animal "dog" and "cat". These will be included in "Animals".
    bark (){
        console.log("Woof woof!");
    }
}

class Cat extends Animal{
    meow(){
        console.log("Meow meow!");
    }
}

//We are going to use the classes that we have created
const myDog = new Dog ("Bingo");
myDog.bark();
myDog.eat();

const myCat = new Cat ("Pirris");
myCat.meow();
myCat.eat();