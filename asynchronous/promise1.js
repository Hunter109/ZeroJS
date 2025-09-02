function randomNumber() {
    return new Promise((resolve, reject) => {
        let num = Math.ceil(Math.random() * 10);
        if (num > 5) {
            resolve("the promise is resolve");
        } else {
            reject("since the value of num is smaller than 5 it is rejected");
        }
    });
}

randomNumber()
    .then((params) => {
        console.log(params);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("promise practise") // it will execute first
