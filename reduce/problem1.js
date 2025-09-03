// 11. Use `reduce` to sum `[1, 2, 3, 4, 5]`.

let num = [1, 2, 3, 4, 5]
let sum = num.reduce((acc, num) => {
    return acc + num
}, 0)
console.log(sum)


// 12. Find the maximum value in `[5, 10, 3, 20]` using`reduce`.

let number = [5, 10, 23, 3, 20];
let maxNum = number.reduce((acc, num) => {
    if (acc < num) {
        return num
    }
    else {
        return acc
    }
}, 0)
console.log(maxNum)