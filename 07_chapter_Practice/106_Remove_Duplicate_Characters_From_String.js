let str="Hello World";
let result="";
for(let ch of str){
    if(!result.includes(ch)){
        result+=ch;
    }
}

console.log(result);
