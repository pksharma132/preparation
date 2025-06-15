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


console.log(merge([2,2,1], [1,6]))