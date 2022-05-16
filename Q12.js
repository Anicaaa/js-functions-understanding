// Q12

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?

Answer: The result value is 10.

Reason: myFunction has the value of 5 as an argument and parameter which is multiplied with getSomeValue which has
the value of 2. 
As a result, 5 * 2 = 10.

Result: Yes, as expected
*/

console.log(result);
