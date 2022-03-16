// # Q2

function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);

/* What is the value of result after calling this function? Why?
Same as Q1 example. 
The code calls a fucntion called `myFunction` which contains two arguments (5, 5). 
These two numbers are going to be added together because the return has the value of num1 + num2. 
The return value is 10. */

// # Q3

function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num);
console.log(num);

/* What is the value of num at the end of the program? Why? 
The value of num is 8 because the argument num is equal to 10.
However when it runs through return num-1, it substracts the original numer 10 with -1. 
It goes through num = myFunction(num) again with num being equal to 9, so 9-1 equals 8. */
