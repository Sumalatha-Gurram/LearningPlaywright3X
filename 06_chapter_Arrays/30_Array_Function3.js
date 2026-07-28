let arr=[8,6,3,4,5];
console.log(arr.sort());

let arr1=[28,6,32,4,5];
console.log(arr1.sort());
//Ascending order
let arr2=[28,6,32,4,5];
console.log(arr2.sort((a,b)=>a-b));

//Descending order
let arr3=[28,6,32,4,5];
console.log(arr3.sort((a,b)=>b-a));

//slice method
let arr4=[28,6,32,4,5];
console.log('arr4:', arr4);
console.log('slice(1,3):', arr4.slice(1,3));
console.log('slice(1):', arr4.slice(1));
console.log('slice():', arr4.slice());
console.log('slice(-2):', arr4.slice(-2));
console.log('slice(-4,-1):', arr4.slice(-4,-1));
console.log('original arr4 after slice (unchanged):', arr4);

let arr5=[28,6,32,4,5];
console.log(arr5.slice(1,4));