function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);

}

console.log(gcd(10, 15));
console.log(gcd(100, 10));

// 10 -> 2 * 5
// 15 -> 3 * 5
// 5

// gcd(a,b) => gcd(b, a % b);