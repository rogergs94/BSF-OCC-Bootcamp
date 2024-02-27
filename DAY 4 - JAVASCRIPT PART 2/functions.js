//Functions --> Allows us to write reusable block of codes and also provide ways to organize and structure codes

//  Declaring a function
function greet() {
    console.log ("Hello to the world of functions!");
    console.log ("Hello to the world of functions!");
    console.log ("Hello to the world of functions!");
}

//  Calling the function:
greet();
greet();


//  Function declaration. The difference with a function expression, is that you can call the function declaration before or after declaring it.
//  Can be hoisted+
function functionDeclaration() {
    console.log('Hello! I am a function declaration!');
};
functionDeclaration();

//  Function expression. It can´t be hoisted (). It is a best practice. We have a better control and don´t confuse the code. 
//  We should use function expression over declarations.
const functionExpression = function() {
    console.log('Hello! I am a function expression!');
};
functionExpression();

//  Functions with parameter/variable --> this is a way to pass data to the function
function greetme(name) {
    console.log("Hello", name + "!");
}

greetme("Regel"); //"Regel is an argument. It´s the actual value itself". This is static

//Functions with a return value
function sum(a, b) {
    console.log("I am printed before the returned value");
    return a + b; //Return marks the end of the code block
    console.log("I am printed after the returned value"); //it´s not executed, muted, unreachable code
}

console.log("The sum of a and b is: ", sum(10, 20));