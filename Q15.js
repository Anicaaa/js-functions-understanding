// Q15

function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?

Answer: It's -10

Reason: The function myFunction(num1) has one parameter.
If true is truthy, it will return -10. If true is falsey, it will return num1 * 10.
In this case, when the function myFunction(num1) is declared with a const variable result, it returns -10 as true is truthy. 

Result: No, not as expected.
*/

console.log(result);
