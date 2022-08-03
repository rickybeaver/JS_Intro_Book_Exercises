/*
Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive.

You may assume that the argument is always a positive integer.
*/

// The solution I came up with (using recursion):
function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

// Given answer:
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}