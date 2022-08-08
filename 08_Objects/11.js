// Write some code to replace the value 6 in the following object with 606:

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
// You don't have to search the object. Just write an assignment that replaces the 6.

// Dot notation
obj.bar[3].xyz = 606;
// Bracket notation
obj['bar'][3]['xyz'] = 606;