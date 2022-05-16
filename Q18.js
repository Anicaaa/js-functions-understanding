// Q18
function myFunction(num1) {
  return num1 * 10;

  return -100;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?
Answer: It's 50.

Reason: Even though the function also returns num1 * 10,
a function can only return one value and evaluate the first value available.
It cannot return two values twice. 
As a result, on line 8, the function myFunction(num1) is declared with a variable result and it returns 5 * 10 = 50, as
myFunction as an argument of 5.

Result: Yes, I was expecting it.
*/

console.log(result);
