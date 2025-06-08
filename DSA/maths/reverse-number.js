// Keep multipliying the prev res * 10 and add the digit to it until num is greater than 0

// res = 0
// 12345 % 10 = 5
// 12345 / 10 = 1234.5 => 1234
// res =  0 * 10 + 5 => 5 

// 1234 % 10 = 4
// 1234 / 10 = 123.4 => 123
// res = 5 * 10 + 4 => 54

// 123 % 10 = 3
// 123 / 10 = 12.3 => 12
// res = 54 * 10 + 3 => 543

// 12 % 10 = 2
// 12 / 10 = 1.2 => 1
// res = 543 * 10 + 2 => 5432
// ...


function reverseNumber(num) {
    let res = 0;

    while (num > 0) {
        const digit = num % 10;
        res = res * 10 + digit;
        num = Math.floor(num / 10);
    }

    return res;

}


console.log(reverseNumber(12345));
console.log(reverseNumber(54321));
console.log(reverseNumber(1));
console.log(reverseNumber(0));



