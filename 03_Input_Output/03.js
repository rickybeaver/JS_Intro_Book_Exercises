let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)

/* 
the given answer used parseInt() intstead of Number() for the age variable. 
That is more beneficial in the case of an answer of digit(s) followed by an invalid character somewhere. 
In that case, Number() returns NaN while parseInt still returns a number.
However, if the user inputs a letter as the first character, the age variable is still NaN in both situations.

Could use an if statement to check if the data type is NaN and output an error message if so:
*/

// if (Number.isNaN(age)) {
//   console.log('Error! That is not a number.')
// } else {
//   console.log('You are ' + age + ' years old.')
//   console.log(`In 10 years, you will be ${age + 10} years old.`)
//   console.log(`In 20 years, you will be ${age + 20} years old.`)
//   console.log(`In 30 years, you will be ${age + 30} years old.`)
//   console.log(`In 40 years, you will be ${age + 40} years old.`)
// }
