// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// What does this program log to the console? Why?

/*
This program will log 'bar' to the console. 
The value assigned to the let variable foo inside the block is only visible from inside that block. 
Because the console.log() is outside the block, it is only able to see when foo was initialized with the value 'bar'.
*/
