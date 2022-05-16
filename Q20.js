// Q20

function myFunction(num1, num2, num3) {
  return num1 + num3;
}

const num1 = 20;
const num2 = 200;
const num3 = 1000;

const result = myFunction(5, 10, num3, 15);

/* What will be the value of result when this code runs? Why?
Answer: The result value is 1005

Reason: myFunction(5, 10, num3, 15) on line 11 took 5 as num1 and num3 as 1000 and added them together when it's
returned on line 4. The num3 is in global scope and the argument 15 on line 11 is ignored.
*/
console.log(result);
