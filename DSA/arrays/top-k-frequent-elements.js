function topKFrequent(nums, k) {
    const map = new Map();

    for (let i of nums) {
        if (map.get(i) === undefined) {
            map.set(i, 1)
        } else {
            map.set(i, map.get(i) + 1);
        }
    }

    const res = [];
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        res.push(sorted[i][0])
    }

    return res;

}


console.log(topKFrequent([1,2,2,3,3,3], 2))
console.log(topKFrequent([7,7], 1))
console.log(topKFrequent([1,2], 2));
