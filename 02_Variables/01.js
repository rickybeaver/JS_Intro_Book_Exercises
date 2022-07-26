/* 
Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
*/

const firstName = 'Victor';

console.log('Good Morning, ' + firstName + '.');
console.log(`Good Afternoon, ${firstName}.`);
console.log('Good Evening, ' + firstName + '.');
