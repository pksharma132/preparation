function countDigits(num) {

    // keep dividing by 10 until you can't

    if (num === 0) return 1;

    let count = 0;

    num = Math.abs(num);

    while (num > 0) {
        num = Math.floor(num / 10)
        count++;
    }

    return count;

}

console.log(countDigits(12345));
console.log(countDigits(-12345));
console.log(countDigits(1));
console.log(countDigits(0));