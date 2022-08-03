/*
Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.
*/

let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${age} years old.`);
for (let futureYears = 10; futureYears <= 40; futureYears += 10) {
  console.log(`In ${futureYears} years, you will be ${age + futureYears} years old.`)
}