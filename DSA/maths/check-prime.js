function isPrime(num) {
    if (num < 3) return true;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true
}

console.log(isPrime(67));
console.log(isPrime(69));