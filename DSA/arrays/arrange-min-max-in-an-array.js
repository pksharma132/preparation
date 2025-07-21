function minMax(arr) {
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    let res = [];

    while(i < j) {
        res.push(arr[j--]);
        res.push(arr[i++]);
    }

    if (i === j) res.push(arr[i]);

    return res;
}

console.log(minMax([1, 2, 3, 4, 5, 6]));
console.log(minMax([1, 2, 3, 4, 5]));
