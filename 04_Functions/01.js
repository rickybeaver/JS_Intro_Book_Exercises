// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);


/* 
Logs 1 to the console.
Executing the foo function does not affect the output because the function is using let to declare a new local variable bar whose scope is confined to just the function block.
So, it doesn't change the value of the global variable bar, which is still equal to 1.
*/
