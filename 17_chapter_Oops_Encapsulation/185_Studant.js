class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log(this.name);
        console.log(this.marks);
    }
}

let s = new Student("Sumalatha", 95);

s.display();