const user = {
    name: "Sumalatha",
    age: 30,
    email: "sumalatha@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);