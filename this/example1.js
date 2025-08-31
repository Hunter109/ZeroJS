const student = {

    name: "utsab wagle",
    age: 22,
    english: 76,
    science: 88,
    math: 98,
    getAvg() {
        let avg = (this.math + this.english + this.science) / 3
        console.log(avg)
    }

}
student.getAvg()