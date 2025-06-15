function merge(a, b) {
    const res = [];

    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            res.push(a[i]);
            i++;
        }

        if (a[i] > b[j]) {
            res.push(b[j]);
            j++;
        }
    }

    while(i < a.length) {
        res.push(a[i++]);
    }

    while(j < b.length) {
        res.push(b[j++]);
    }

    return res;

}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);

}

console.log(mergeSort([5,3,1,2,4]));