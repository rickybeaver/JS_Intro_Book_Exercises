// Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer:

function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}
