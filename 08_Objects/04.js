// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
// The order of the array does not matter.


Object.keys(obj).map(key => key.toUpperCase());

// Using a for/in loop:
let capitalKeys = [];
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    capitalKeys.push(key.toUpperCase())
  }
}