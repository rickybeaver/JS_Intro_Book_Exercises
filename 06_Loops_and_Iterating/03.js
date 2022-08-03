/*
The following code causes an infinite loop (a loop that never stops iterating). Why?
*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
The code causes an infinite loop because we assign the counter to the vallue of 0 instead of using a conditional statement.
The return value of this statement evaluates to truthy so the loop condition will never be false.
Also, in the if statement, the conditional never becomes true to break the loop because we reassign the value of counter to 1 every loop.
*/