let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail";
console.log(a.status);


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);


const t_json = {
    "name": "Sumalatha",
    "age": 10
};
console.log(t_json);

const t_js = {
    name: "Sumalatha",
    age: 10
};
console.log(t_js);