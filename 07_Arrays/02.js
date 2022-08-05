// Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

/* Expected Output:
6
4
2
4
16
0
*/

// Used .forEach while filtering for even numbers with an if statement:
myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
})

//Given answers were the same .forEach solution as well as a for loop to iterate instead:
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}