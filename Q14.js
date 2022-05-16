// Q14

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?

Answer: It's 4

Reason: The function getSomeValue has the value of 2 which is multiplied with getSomeValue which has
the value of 2. As a result, 2 * 2 = 4. 
The value 2 is from the global function getSomeValue().

Result: Yes, as expected
*/

console.log(result);
