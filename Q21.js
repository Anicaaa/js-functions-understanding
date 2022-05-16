// Q21

function myFunction(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = myFunction(10, 20);
myFunction(100, 2);

/* What will be the value of result when this code runs? Why?
Answer: It's 30

Reason: The callback function myFunction on line 9 is not declared as a variable called result. 
So, when we console.log, it will go through line 8 because, the function myFunction that has arguments of 10 and 20
has been declared with a varibale called result.
 
Result: as expected.
 */

console.log(result);
