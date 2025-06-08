function reverseNumber(num) {
  let res = 0;

  while (num > 0) {
    res = res * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return res;
}

function isPalindrome(num) {
    num = Math.abs(num);
  return num === reverseNumber(num);
}

console.log(isPalindrome(121));
console.log(isPalindrome(1223));
