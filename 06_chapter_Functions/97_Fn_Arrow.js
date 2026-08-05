function greet(name){
    return `Hello, ${name}!`;
}

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

const greet2 = (name2) => `Hello, ${name2}!`;

console.log(greet("Shivam"));
console.log(greet1("Shivam"));
console.log(greet2("Shivam"));