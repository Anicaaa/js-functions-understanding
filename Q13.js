// Q13

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);

/* What will be the value of result when this code runs? Why?

Answer: It's 10.

Reason: The function getSomeValue() returns 2.
The 2nd function myFunction(num1) has one parameter which is num1 and it's equivalent to 5 because on line 12, myFunction has been calledback. holding a value of 5.
Inside this function, a variable called num2 is declared and initialised to the function getSomeValue() which has the value of 2.
The function myFunction(num1) returns num1 * getSomeValue().
This function will return 5 * 2 = 10. 

Result: Yes, as expected
*/
