// # Q2

/* function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);

/* What is the value of result after calling this function? Why?
Same as Q1 example. 
The code calls a fucntion called `myFunction` which contains two arguments (5, 5). 
These two numbers are going to be added together because the return has the value of num1 + num2. 
The return value is 10. */

// # Q3

/* function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num); */

/* What is the value of num at the end of the program? Why? 
The value of num is 8 because the argument num is equal to 10.
However when it runs through return num-1, it substracts the original numer 10 with -1. 
It goes through num = myFunction(num) again with num being equal to 9, so 9-1 equals 8. */

// # Q4

function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);

/* The let num = 10 is a global variable.
However let num = 10 is never used because the let add = 3 is taking over.
Let add = 3 is a function scope and when I console.log(add) it gives me 1. 
It goes through the add = myFunction(add) TWICE. So initially the result is 2, and then 1.

The result was not what I was expecting. I expected return 10 -1 to equal 9. 
However, when I console.log(num), it remains 10, nothing changes. */
