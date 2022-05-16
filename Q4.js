//Q4

function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);

/* 
What is the value of add and num at the end of the program? Why?

Answer: add = 1 and num = 10

Reason: let num = 10 is never used because the let add = 3 is taking over.
Let add = 3 is a function scope and when I console.log(add) it gives me 1. 
It goes through the add = myFunction(add) TWICE. So initially the result is 2, and then 1.
As a result, the value of add is 1, the value of num is 10.

Result: Not what I was expecting. I expected return 10 - 1 to equal 9. 
However, when I console.log(num), it remains 10, nothing changes. 
*/

console.log(add);
console.log(num);
