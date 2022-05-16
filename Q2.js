// Q2

function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);

/* 
What is the value of result after calling this function? Why?

Answer: undefined

Reason: The result is undefined because the function myFunction(num1, num2) doesn't return
anything. If line 4 had the word "return" in front of "num1 + num2", it would 
have returned 10. But this function doesn't have the return.

Result: Not as expected. I expected the console.log to return 10.
*/

console.log(result);
