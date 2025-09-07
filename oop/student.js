class Student {
    constructor(name, faculty, age, college) {
        this.name = name;
        this.faculty = faculty;
        this.age = age;
        this.college = college;

    }

    studentDetail() {
        console.log(`student name ${this.name}`);
        console.log(`student collge ${this.college}`)
        console.log(`student faculty. ${this.faculty}`)
        console.log(`student age ${this.age}`)
    }

}

let student1 = new Student("utsav", "science", "23", "united technical college");
student1.studentDetail();


console.log("printing the detail of 2nd student");
let student2 = new Student("Hunter", "Engineering", "23", "Pokhara University");
student2.studentDetail();
