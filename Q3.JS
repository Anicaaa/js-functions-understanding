// Q3

function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num);

/*
What is the value of num at the end of the program? Why? 

Answer: num = 8.

Reason: On line 7, the variable num is declared with the value of 10.
The function myFunction, on line 3, holds a parameter of 10.
The function returns 10 - 1 which is 9.
This process has gone through one more time because the variable on line 9 is reassigned, so 
the function instead of holding a parameter of 10, it holds a parameter of 9.
As a result, return 9 - 1 gives back 8.

Result: As expected.
*/

console.log(num);
