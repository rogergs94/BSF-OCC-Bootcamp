//Our functions can have other functions inside it as arguments.
function higherOrderFunction(callback) {//callback: it´s a parameter and it means that it´s calling back a function that it´s defined inside {}. I´m calling back another function 
    console.log("This is the higher-order function speaking.");
    callback();
}

function passedFunction() {
    console.log("This is the passed function being called.");
}

higherOrderFunction(passedFunction); //We punt the name of the function we want to pass it. We write it as a parameter (without () )