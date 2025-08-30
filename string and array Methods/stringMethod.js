// Store your full name in a variable and print its length.
let myName = 'Utsav Wagle';

console.log(myName.length)


// Convert your name into uppercase and lowercase.

let lowerName = myName.toLowerCase();
console.log(lowerName);

let upperName = myName.toUpperCase();
console.log(upperName);


// Trim spaces from " JavaScript " and print.

let language = '  JavaScript ';
console.log(language.trim());

// Extract "Script" from "JavaScript".
console.log(language.trim().slice(4)); // method chaining 


// Replace "dog" with "cat" in "I have a dog".

let word = 'i have a dog';
let newWord = word.replace('dog', 'cat');
console.log(newWord);