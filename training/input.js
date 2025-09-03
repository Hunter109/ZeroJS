setTimeout(() => {
    console.log("iam asynchonuos");
}, 0);

function mypromise() {
    return new Promise((resolve, reject) => {
        resolve("resolve done")
    })
}
mypromise().then((result) => {
    console.log(result)
})
console.log("hellow");
console.log("hello my name is utsab");

// function sayHello() {
//     console.log("hello iam utsav");
// }

// function sayHi() {
//     console.log('hi iam hunter ')
// }

// sayHello();
// sayHi();


