let a=[1, 2, 20, 3, 4, 4, 5, 20, 6, 7, 8, 9, 10, 1];
let unique = [];
for (let i = 0; i < a.length; i++) {
    if (unique.indexOf(a[i]) === -1) {
        unique.push(a[i]);
    }
}
console.log("Array after removing duplicates is: " + unique);