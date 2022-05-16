// Q6

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

/* What value will be logged inside the function call? Why?

Answer: The console.log shows 10.

Reason: On line 10, myFunction(num1, num) is equivalent to myFunction(2, 10).
On line 3, myFunction(num, num1) has changed the order but the values are the same as
the callback function on line 10.

Result: Not what I expected
*/
