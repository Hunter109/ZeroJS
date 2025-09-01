let prom1 = new Promise((resolve, reject) => {
    console.log("Hello WOrld");
    setTimeout(() => {
        resolve("Utsav Wagle");
    }, 5000);
});

prom1.then((params) => {
    console.log(params);
});
