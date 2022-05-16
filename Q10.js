// Q10

function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

/* 
What will be logged out on the console when this code runs? Why?

Answer: It will console log 100

Reason: The 3rd value provided in the function myFunction on line 11 is 100.
As a result, the function myFunction is declared on line 3
and the 3rd parameter is 100.

Result: Not as expected
*/
