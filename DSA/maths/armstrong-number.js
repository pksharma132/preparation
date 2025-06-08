function countDigits(num) {
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10)
    }

    return count;
}



function isArmstrongNumber(num) {
    const power = countDigits(num);
    let res = 0;
    const og = num;

    while (num > 0) {
        res += Math.pow(num % 10, power);
        num = Math.floor(num / 10);
    }
    return res === og;
}

function isArmstrongNumberWithString(num) {
    const og = num;
    const power = num.toString().length;
    let res = 0;

    for (let i of num.toString()) {
        res += Math.pow(Number(i), power)
    }

    return og === res;
}



console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(55));

console.log(isArmstrongNumberWithString(153));
console.log(isArmstrongNumberWithString(55));