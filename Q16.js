// Q16

function myFunction(num1) {
  if (false) {
    return -100;
  }

  return num1 * 10;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?
Answer: The result is 50.
 
Reason: The function myFunction(num1) has one parameter.
If false is falsey, it returns -100. Otherwise, it returns num1 * 10.
In this case, when the function myFunction(num1) is declared with a const variable result, it returns 50 as false is falsey.
 
Result: Yes, as expected.
*/

console.log(result);
