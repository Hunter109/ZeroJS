setTimeout(() => {
    console.log("iam asynchonuos");
}, 0);

let data;
function mypromise() {
    return new Promise((resolve, reject) => {
        resolve("resolve done")
    })
}
mypromise().then((result) => {
    data = result;
    console.log(result)
})
console.log(data);
console.log("hello my name is utsab");

// function sayHello() {
//     console.log("hello iam utsav");
// }

// function sayHi() {
//     console.log('hi iam hunter ')
// }

// sayHello();
// sayHi();


