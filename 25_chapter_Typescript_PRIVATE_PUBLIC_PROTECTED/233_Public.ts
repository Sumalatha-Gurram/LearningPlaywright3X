class Employee {
    public name: string = "Sumalatha";

    public displayName() {
        console.log(this.name);
    }
}

let emp = new Employee();

console.log(emp.name);
emp.displayName();