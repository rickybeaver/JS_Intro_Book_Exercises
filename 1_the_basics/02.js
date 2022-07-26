// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

// ones place:
ones = 4936 % 10
console.log(ones)

//tens place:
tens_number = (4936 - ones) / 10
tens_place = tens_number % 10
console.log(tens_place)

//hundreds place:
hundreds_number = (tens_number - tens_place) / 10
hundreds_place = hundreds_number % 10
console.log(hundreds_place)

//thousands place: 
thousands_number = (hundreds_number - hundreds_place) / 10
thousands_place = thousands_number % 10
console.log(thousands_place)
//or:
console.log(Math.floor(4936 / 1000))
// got the Math.floor from the Codecademy course
