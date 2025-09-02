// 3. Use `forEach` to calculate the sum of `[5, 10, 15, 20]` and log the total.

let numbers = [5, 10, 15, 20];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log("the sum of the number in array is ", sum);

// Given`[{name: 'Alice'}, {name: 'Bob'}]`, use`forEach` to print all names in
// uppercase.

let object = [
    {
        name: "Alice",
    },
    {
        name: "Bob",
    },
];
object.forEach((obj) => {
    console.log(obj.name.toUpperCase());
});
