// # Q6

/* function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

/* What value will be logged inside the function call? Why?
It's 2 and 10 because we're changing the order, the values are swapped.
*/

// # Q7

/* let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

/* What will the value of counter be at the end of this program? Why?
The value of counter is 3.
The reason is because myFunction has been called which is going to repeat the calculation as 2+1.
*/

// # Q8

/* function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);

/* What will be logged out on the console when this code rus? Why?
The console will log 4 and 10.
This is because myFunction has been calledback with new variables of num3 and num1.
Both of these variables are taking over.
*/

// # Q9

/* function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1);

/* What will be logged out on the console when this code rus? Why?
It will console log 20.
The variable num3 is 20 and placed as a global scope. */

// # Q10

/* function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

/* What will be logged out on the console when this code runs? Why?
It will console log 100. The value provided for num3 in the function is 100.
This is because the parameter values are provided when calling myFunction. */

// # Q11

/* function myFunction(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

const result = myFunction(1, 1, 1);

/* What will be the value of result when this code runs? Why?
The result is 3.
This is because when myFunction is called, it has three arguments of 1, 1 , 1. 
These 1, 1, 1 arguments are going to be addded in the result num1 + num2 + num3 */

// # Q12

/* function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?
It's 10 because myFunction has the value of 5 which is multiplied with getSomeValue which has
the value of 2. As a result, 5 * 2 = 10. */

// # Q13

/* function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?
It's 10 because myFunction has the value of 5 which is multiplied with getSomeValue which has
the value of 2. As a result, 5 * 2 = 10. */

// # Q14

/* function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?
It's 4 because getSomeValue has the value of 2 which is multiplied with getSomeValue which has
the value of 2. As a result, 2 * 2 = 4. */

// # Q15

/* function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);
console.log(result);

/* What will be the value of result when this code runs? Why?
 */
