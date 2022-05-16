// Q7

let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

/* 
What will the value of counter be at the end of this program? Why?

Answer: The value of counter is 3.

Reason: myFunction has been called TWICE which is going to repeat the calculation/incrementation TWICE.
The first incrementation is counter 1 + 1.
The second incrementation is counter 2 + 1.

Result: Yes, as expected
*/
