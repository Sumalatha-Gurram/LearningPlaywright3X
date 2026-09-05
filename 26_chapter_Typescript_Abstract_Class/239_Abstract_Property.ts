abstract class Employee {
    constructor(public name: string) {}

    abstract work(): void;

    displayName() {
        console.log("Employee:", this.name);
    }
}

class Tester extends Employee {
    work() {
        console.log("Tester is testing the application");
    }
}

let tester = new Tester("Sumalatha");

tester.displayName();
tester.work();