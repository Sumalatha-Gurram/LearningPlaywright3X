class Person {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    displayCourse() {
        console.log(this.course);
    }
}

let s = new Student("Sumalatha", "JavaScript");

s.displayName();
s.displayCourse();