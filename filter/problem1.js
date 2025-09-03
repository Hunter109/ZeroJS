// 16. Filter `[1, 2, 3, 4, 5]` to get only even numbers.

let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter((numbers) => {
    return numbers % 2 == 0
});
console.log(even);


// 17. Filter `['apple', 'banana', 'kiwi']` to get strings longer than 4 characters.
let fruits = ['apple', 'banana', 'kiwi'];
let fruit = fruits.filter((fruits) => {
    return fruits.length == 4;
})
console.log(fruit)