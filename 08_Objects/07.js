// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// Snippet 2
for (let key in myObj) {
  console.log(key);
}
// Without running this code, can you determine whether these two snippets produce the same output? Why?


let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);

myObj.qux = 3;
console.log(myObj.length)

// Both snippets will iterate over keys of the myObj object.
// However, Snippet 1 will only include own properties, while Snippet 2 will iterate over all of the object's keys.