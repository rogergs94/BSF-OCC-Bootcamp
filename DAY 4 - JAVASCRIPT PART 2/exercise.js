//Even or Odd
/*
1. Define a function named checkEvenOrOdd that takes one parameter named num.
2. Inside the function, use the modulo operator % to check if the given number is even or odd.
3. Create variables numl and num2 with different number values.
4. Call the checkEvenOrOdd function with each of the variables numl and num2 as arguments.
5. Log the result of each function call to the console, indicating whether the numbers are even or odd
*/

var num=10

function checkEvenOrOdd(num) {
    console.log(num, )
    if (num %2 ==0) {
        console.log("is an even number");
    }else{
        console.log("is and odd number");
    }
}

checkEvenOrOdd(num);