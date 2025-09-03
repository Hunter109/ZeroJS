let id = setTimeout(() => {
    console.log("things to be done after some time")
}, 5000)

clearTimeout(id);


let id2 = setInterval(() => {
    console.log("run in every 1 sec")
}, 1000);

clearInterval(id2);