// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
'hi'
'hello'

When we invoke the bar function with the arguments foo and qux, the function first reassigns the 'a' key in the foo object to a new value: 'hi'.
This mutation is possible because objects are mutable, unlike primitive values.
So, the value of foo.a (the 'a' property of foo) is 'hi' when we log it.
However, the second line of the function body reassigns the value of the variable argument2, but is not mutating the string represented by qux.
So, the original value of qux ('hello') is still logged after the function is called.
*/