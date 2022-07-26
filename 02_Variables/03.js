// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// This will produce an error. Because foo was declared inside the block, it is not visible outside the block.

