/*
Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/


//This was my first thought and is the way it's done in the given answer (except they use parseInt in the return statemet of the getNumber() function):
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}

let firstNum = getNumber('Enter the first number:\n');
let secondNum = getNumber('Enter the second number:\n');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

/*
Then I wanted to try putting the whole thing in one function. 
Not sure how beneficial that is overall.
Fixed to just multiplying and will always log the equation with answer.
(?) Could ask for what operation to do and use if statement to perform that operation.
(?) Could also use Number.isNaN() again to check for valid numerical answer
*/

// function multiply() {
//   let rlSync = require('readline-sync');
//   let firstNum = rlSync.question('Enter the first number:\n');
//   let secondNum = rlSync.question('Enter the second number:\n');
//   console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// }

// multiply();