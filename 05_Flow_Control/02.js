/*
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/

// Using if/else statement:
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// Using ternary operator:
function evenOrOdd(num) {
  console.log(num % 2 === 0 ? 'even' : 'odd')
}
