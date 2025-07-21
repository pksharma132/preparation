function sameFrequencyOrNot(a, b) {
  const count1 = {};
  const count2 = {};

  for (let i of a.toString()) {
    count1[i] = 1 + (count1[i] || 0);
  }

  for (let i of b.toString()) {
    count2[i] = 1 + (count2[i] || 0);
  }

  for (let i of Object.keys(count1)) {
    if (count1[i] !== count2[i]) return false;
  }

  return true;
}


console.log(sameFrequencyOrNot(182, 281)); // true
console.log(sameFrequencyOrNot(3589578, 5879385)); // true
console.log(sameFrequencyOrNot(34, 14)); // false
console.log(sameFrequencyOrNot(22, 222)); // false
