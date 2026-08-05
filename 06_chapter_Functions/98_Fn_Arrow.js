function greet(name){
    return `Hello, ${name}!`;
}

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

const greet2 = (name2) => `Hello, ${name2}!`;

console.log(greet("Nikhil"));
console.log(greet1("Nikhil"));
console.log(greet2("Nikhil"));