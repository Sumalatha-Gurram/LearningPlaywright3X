function largestOf3Numbers(a, b, c) {
    if (a >= b && a >= c) {
        console.log("Largest Number is: " + a);
    } else if (b >= a && b >= c) {
        console.log("Largest Number is: " + b);
    } else {
        console.log("Largest Number is: " + c);
    }
}
largestOf3Numbers(30, 40, 35);