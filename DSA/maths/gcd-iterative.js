function gcd(a, b) {

    while (b > 0) {
        let temp = a;
        a = b;
        b = temp % a;
    }

    return a;
}


console.log(gcd(10, 15));
console.log(gcd(100, 10));