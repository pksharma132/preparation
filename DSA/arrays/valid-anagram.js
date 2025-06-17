function hash(str) {
  const key = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const idx = str[i].charCodeAt(0) - "a".charCodeAt(0);
    key[idx]++;
  }

  return key.join("-");
}

function validAnagram(a, b) {
  return (hash(a) === hash(b));
}

console.log(validAnagram("carrace", "racecar"));
