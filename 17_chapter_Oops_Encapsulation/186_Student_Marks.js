class Student {
    #marks;

    constructor(marks) {
        this.#marks = marks;
    }

    getMarks() {
        return this.#marks;
    }

    setMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
        }
    }
}

let s = new Student(80);

console.log(s.getMarks());

s.setMarks(95);

console.log(s.getMarks());