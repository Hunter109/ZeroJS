// 8. For`['a', 'b', 'c']`, use`map` to get`['A', 'B', 'C']`.

let letter = ["a", "b", "c"];
let upLetter = letter.map((letter) => {
    return letter.toUpperCase();
});

console.log(letter);
console.log(upLetter);

// 9. Convert `[2, 3, 4]` to `[4, 9, 16]` using `map`.
let numbers = [2, 3, 4];
let squareNumbers = numbers.map((num) => {
    return Math.pow(num, 2);
});
console.log(numbers);
console.log(squareNumbers);

// 10. Given an array of objects`[{price: 100}, {price: 200}]`, use`map` to get an
// array of prices.

let arr = [{ price: 100 }, { price: 200 }]

let arrPrice = arr.map((item) => {
    return item.price;
})
console.log(arrPrice)