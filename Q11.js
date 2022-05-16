// Q11

function myFunction(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

const result = myFunction(1, 1, 1);

/* 
What will the value of counter be at the end of this program? Why?

Answer: The result is 3.

Reason: When myFunction is called, it has three arguments of 1, 1 , 1. 
These 1, 1, 1 arguments are going to be passed inside the function parameters on line 3.
This function will return num1 + num2 + num3 which is 1 + 1 + 1.

Result: Yes, as expected
*/
