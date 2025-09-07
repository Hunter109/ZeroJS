class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, it's me ${this.name} and my age is ${this.age}`);
    }
}

// Student inherits from Person
class Student extends Person {
    constructor(name, age, grade) {
        // call parent constructor (Person)
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

let student1 = new Student("Utsab", 21, "Bachelor");
student1.talk();   // inherited from Person
student1.study();  // defined in Student
