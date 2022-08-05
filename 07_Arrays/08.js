// This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method:

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Hint: Use an array as the accumulator


function oddLengths(array) {
  return array.reduce((acc, currValue) => {
    if (currValue.length % 2 !== 0) {
      acc.push(currValue.length);
    }
    return acc;
  }, []);
}

// Given solution:
function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}
// Uses more specific and descriptive variable naming than I currently am
// Makes the code easier to read