//  Create an array of numbers`[2, 4, 6, 8]`.Use `forEach` to print each number
// multiplied by 2.

let arr = [2, 4, 6, 8];

arr.forEach((element) => {
    console.log(element * 2);
});

// Given an array`['apple', 'banana', 'cherry']`, use`forEach` to print the length
// of each string

let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    console.log(`length of ${fruit} is ${fruit.length}`);
});
