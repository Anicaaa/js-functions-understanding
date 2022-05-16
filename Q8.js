// Q8

function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);

/* 
What will the value of result be at the end of this program? Why?

Answer: The result is 14

Reason: myFunction on line 11 has two arguments where num3 = 4 and num1 = 10.
myFunction on line 3 has changed the parameter names but the values are the same as
the callback function on line 11.
Then the return values are num1 (4) + num2 (10) = 14.

Result: Not as expected.
*/

console.log(result);
