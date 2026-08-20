function isPrime(n) {
    if (n <= 1) {
        console.log(n + " is not a Prime Number");
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(n + " is not a Prime Number");
            return;
        }
    }
    console.log(n + " is a Prime Number");
}
isPrime(17);
isPrime(25);