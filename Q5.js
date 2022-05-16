// Q5

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num);

/* 
What value will be logged inside the function call? Why?

Answer: undefined

Reason: 
On line 10, myFunction(num) is a different function or is faulty because
it only has one parameter. The function on line 3 has two parameters instead.


Result: Not what I expected. 
*/
