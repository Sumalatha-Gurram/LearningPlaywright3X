let a=[51, 100, 157, 220, 25];
let largest = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];
    }
}
console.log("Largest number in a Array is: " + largest);