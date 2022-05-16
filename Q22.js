// Q22

function myFunction(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result = 0;
myFunction(100, 2);

/* What will be the value of result when this code runs? Why?

Answer: It's 0

Reason: On line 8, the variable let has been declared and assigned a value of 0.
This value of 0 is passed on line 4. 
Line 9 has a callback function with two arguments, 100, 2. However, these will be ignored.
*/

console.log(result);
