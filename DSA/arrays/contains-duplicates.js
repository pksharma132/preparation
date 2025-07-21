function areThereDuplicates(arr) {
    const set = new Set();

    for (let i of arr) {
        if (set.has(i)) return true;
        set.add(i);
    }

    return false;
}

console.log(areThereDuplicates([1, 2, 3])) // false
console.log(areThereDuplicates([1, 2, 2])) // true
console.log(areThereDuplicates(["a", 'b', 'c', 'a'])) // true