// Q25

function myFunction(a) {
  let b = 20;

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}

let a = 1;
let b = 2;
let c = 3;

myFunction(100);

/* What will be the printed out by the console log statements when this code runs? Why?

Answer: It will console.log:
a:100
b:20
c:3

Reason: The function takes the argument 100 and when console.logged, a is equal 100.
The second console.log, b equals 20 because it took the local variable value inside the funtion.
The third console.log, c quals 3 because there are no other local variables inside the function, so it looks for 
the number globally, outside the function.
*/
