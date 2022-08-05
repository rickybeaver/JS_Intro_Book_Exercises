/*
Let's make the problem a little harder. 
In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.
*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// Used .forEach method to iterate through each nested array:
myArray.forEach(nestedArr => {
  nestedArr.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
})


// Given answers were the same .forEach solution as well as nested for loops:
for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}