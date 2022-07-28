// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');


/*
Code will not log anything.
The return statement stops execution of the function before anything is logged to the console.
*/