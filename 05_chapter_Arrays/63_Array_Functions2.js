let arr=[10, 20, 30, 40, 50];
// Adding an element to the end of the array
arr.push(60);
console.log("Array after push: " + arr);
// Removing the last element from the array
arr.pop();
console.log("Array after pop: " + arr);
// Adding an element to the beginning of the array
arr.unshift(5);
console.log("Array after unshift: " + arr);
// Removing the first element from the array
arr.shift();
console.log("Array after shift: " + arr);
// Removing elements from the array using splice
arr.splice(2, 1);
console.log("Array after splice: " + arr);
// Adding multiple elements to the end of the array
arr.push(70, 80, 90);
console.log("Array after push: " + arr);
// Creating a new array using slice
let newArr=arr.slice(1, 4);
console.log("New array after slice: " + newArr);
arr.length = 7; // Clearing the array
console.log("Array after clearing: " + arr);
arr.reverse(); // Reversing the array
console.log("Array after reverse: " + arr);
arr.sort(); // Sorting the array
console.log("Array after sort: " + arr);