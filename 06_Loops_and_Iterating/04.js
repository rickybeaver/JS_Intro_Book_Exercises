// Does the following code produce an error? Why or why not? 
// What output does this code send to the console?


for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*
This code does not produce an error. It will also run without causing an infinite loop because we increment i in the loop body.
The code will output the numbers 1 to 5 each on a new line.
The first number logged is 1 because the console.log() outputs the return value of (i += 1), which is the new value of the left side operand.
*/