// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
This code will log 'Not Empty'
We are passing an empty array when we call the isArrayEmpty function.
An empty array still evaluates to true, meaning the first branch of the if statement will be executed.
*/