// 6. Convert `[1, 2, 3, 4]` into an array of strings using`map`.

let arr = [1, 2, 3, 4];
let result = arr.map((number) => {
    return number.toString();
})

console.log(result)

// .Given`[10, 20, 30]`, use`map` to create a new array with each number
// divided by 10.

let nums = [10, 20, 30];
let dividend = nums.map((num) => {
    return num / 10
})
console.log(nums)
console.log(dividend)