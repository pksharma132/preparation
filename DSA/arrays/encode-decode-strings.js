function encode(strs) {
  let res = "";
  for (let i of strs) {
    res += i.length + "#" + i;
  }

  return res;
}

function decode(str) {
  let i = 0;
  let res = [];
  while (i < str.length - 1) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    console.log(i, j, str.slice(i+1, j));
    const len = Number(str.slice(i, j))

    const word = str.slice(j+1, j+1+len);



    res.push(word);
    i = j + 1 + len;
  }

  return res;
}

const encoded = encode(["neet", "code", "love", "you"]);
console.log(encoded);
console.log(decode(encoded));
