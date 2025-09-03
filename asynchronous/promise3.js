function dataRetrive() {
    return new Promise((resolve, reject) => {
        resolve({
            name: "utsav wagle",
            age: 23,
            major: "BE Computer",
        });
    });
}

let username = dataRetrive().then((dataRetrive) => {
    console.log(dataRetrive);
    return dataRetrive.name
})
    .then((name) => {
        console.log(name)
    })
