// Q19

function myFunction(num1, num2, num3) {
  return num2;
}

const result = myFunction(5, 10, 15);

/* What will be the value of result when this code runs? Why?
Answer: The result value is 10.
 
Reason: The function myFunction(num1, num2, num3) has three parameter, and returns the num2.
When the function myFunction(num1, num2, num3) is declared with a variable result, having 5, 10, 15 as arguments, it will only return the argument 10.
  
Result: as expected.
*/

console.log(result);
