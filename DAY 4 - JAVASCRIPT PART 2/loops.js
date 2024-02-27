//Loops - Loops are used to repeatedly execute a block of code until a specific condition is met
//They provide a way to automat code


//For loop
/* for (let i=1; i <= 5; ) { 
    console.log (i);
} // This loop will crash the code, infinite loop. We have to give an option to exit the loop */

for (let i=3; i <= 5; i++) { 
    console.log ("For loop :", i);
} 

//While loop
let count = 1;
while (count <=3) {
    console.log("While loop: ", count);
    count ++;
    console.log("While loop: ", count);
}

//do-while loop: We execute "do" first before the condition while. 
let counter = 10;
do {
    console.log ("Do while count: ", counter);
    counter++;
}while(counter <= 5);
