// 15. Flatten a 2D array `[[1, 2], [3, 4], [5]]` into `[1, 2, 3, 4, 5]` using`reduce`.
let arr = [[1, 2], [3, 4], [5]];
let Flatten = arr.reduce((acc, arr) => {
    acc.push(...arr);
    return acc;
}, []);
console.log(Flatten);