/*
Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.
*/

// Example:
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Expected Output:
[
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]

// Using ternary operator inside .map:
newArray = myArray.map(num => {
  return num % 2 === 0 ? 'even' : 'odd';
})

// Prompt also mentioned that we could try using a for loop as well, so I went ahead and tried that:
newArray = []
for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

// Refactored using ternary operator:
newArray = []
for (let i = 0; i < myArray.length; i += 1) {
  newArray.push(myArray[i] % 2 === 0 ? 'even' : 'odd');
}


console.log(newArray)