// 5. Use `forEach` on `[1, 2, 3, 4, 5]` to push their squares into a new array.

let numbers = [1, 2, 3, 4, 5];
let squares = [];
numbers.forEach((number) => {
    squares.push(number * number)
})
console.log(squares)