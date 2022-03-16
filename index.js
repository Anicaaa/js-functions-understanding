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

/* function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);

/* What is the value of add and num at the end of the program? Why?
The let num = 10 is a global variable.
However let num = 10 is never used because the let add = 3 is taking over.
Let add = 3 is a function scope and when I console.log(add) it gives me 1. 
It goes through the add = myFunction(add) TWICE. So initially the result is 2, and then 1.
As a result, the value of add is 1, the value of num is 10.

The result was not what I was expecting. I expected return 10 -1 to equal 9. 
However, when I console.log(num), it remains 10, nothing changes. */

// # Q5

/* function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num); */

/* What value will be logged inside the function call? Why?
The value that is logged inside the function call is undefined. 
This is because myFunction on line 60 is not complete and it's not a function.

No, the result wasn't what I expected. */

// # Q6

/* function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

/* What value will be logged inside the function call? Why?
It's 2 and 10 because we're changing the order, the values are swapped.
*/

// # Q7

/* let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

/* What will the value of counter be at the end of this program? Why?
The value of counter is 3.
The reason is because myFunction has been called which is going to repeat the calculation as 2+1.
*/

// # Q8

/* function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);

/* What will be logged out on the console when this code rus? Why?
The console will log 4 and 10.
This is because myFunction has been calledback with new variables of num3 and num1.
Both of these variables are taking over.
*/

// # Q9

/* function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1);

/* What will be logged out on the console when this code rus? Why?
It will console log 20.
The variable num3 is 20 and placed as a global scope. */

// # Q10

function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

/* What will be logged out on the console when this code runs? Why?
It will console log 100. The value provided for num3 in the function is 100.
This is because the parameter values are provided when calling myFunction. */
