//Polymorphism

class Animal {
    makeSound(){
        return "The animal makes a noise. "
    }
}

class Dog extends Animal{
    makeSound(){
        return super.makeSound() + "I heard a dog bark. " 
    }
}
//super is just adding on to the current function of the method. 
//So for the makeSound method, it's just adding the string "I heard a dog bark." to the original.

class Cat extends Animal{
    makeSound(){
        return super.makeSound() + "I heard a cat meow. "
    }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());

/*You can also just overwrite a method directly without the super like this:

class Cat extends Animal {
    makeSound() {
        return 'I heard a cat Meoow.'
    }
}
*/