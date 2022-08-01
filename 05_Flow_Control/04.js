// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
The code will log:
'Product2'
'Product3'
'Product not found!'

'113' (the argument passed when the function is called) matches the case '113' clause.
However, there is no break statement.
So, the code in the following clauses will also be executed, even though they doesn't match our argument value.
*/


/*
(Given answer:
Since the case clauses of the switch statement lack break statements, control falls through from the matching case '113' clause and executes the code in the case '142' and default clauses as well.
JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. This fall-through behavior is often undesirable. To avoid it, you must add break statements to each case clause.)
*/