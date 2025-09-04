let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.backgroundColor = 'red';
//     setTimeout(() => {
//         h1.style.backgroundColor = 'blue'
//         setTimeout(() => {
//             h1.style.backgroundColor = 'green'
//         }, 1000)
//     }, 1000)
// }, 1000)

function colorChange(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 10;
            h1.style.backgroundColor = color;
            resolve(data);
        }, 1000);
    });
}

colorChange("red")
    .then((result) => {
        console.log(result);
        return colorChange("blue")
    })
    .catch((result) => { });

