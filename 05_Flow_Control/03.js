// Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

// Using if/else statement:
function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Error! That's not an integer.");
    return;
  }
  
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// Using ternary operator:
function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Error! That's not an integer.");
    return;
  }
  console.log(num % 2 === 0 ? 'even' : 'odd')
}
