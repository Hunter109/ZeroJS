// 13. Concatenate `['Hello', 'World']` into `'Hello World'` using`reduce`.

let word = ['Hello', 'World'];
let finalWord = word.reduce((acc, word) => {
    // return acc.concat(word)
    return `${acc} ${word}`
})
console.log(finalWord)


// 14. Count how many numbers are greater than 10 in `[5, 12, 8, 20]` using
// `reduce`.
let numbers = [5, 12, 8, 20];
let Count = numbers.reduce((acc, num) => {
    if (num > 10) {
        return acc + 1;
    }
    return acc;
}, 0)
console.log(Count)