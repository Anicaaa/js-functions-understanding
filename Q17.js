// Q17

function myFunction(num1) {
  return -100;

  return num1 * 10;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?

Answer: It's -100
 
Reason: Even though the function also returns num1 * 100,
a function can only return one value and evaluate the first value available.
It cannot return two values twice. 
 
Result: Yes, as expected.
*/

console.log(result);
