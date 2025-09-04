// 20. Use `find` to get the first number greater than 10 in `[4, 11, 7, 20]`.


let number = [4, 11, 7, 20];
let greater = number.find((num) => {
    return num > 10
})
console.log(greater)

// 21. Find the first string with length 5 in `['hi', 'world', 'apple']`.
let word = ['hi', 'world', 'apple'];
let first = word.find((word) => {
    return word.length == 5
})
console.log(first)


// 22. Find the first object with `age` greater than 25 in `[{age: 20}, {age: 30}, {age:
let obj = [{ age: 20 }, { age: 30 }, { age: 25 }]
let ageGreater = obj.find((age) => {
    return age.age > 25
})
console.log(ageGreater)