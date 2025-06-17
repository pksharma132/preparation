function containsDuplicate(nums) {
    let map = new Map();

    for (let i of nums) {
        if(map.get(i)) {
            return true;
        }

        map.set(i, 1);
    }

    return false;

}

console.log(containsDuplicate([1,2,3,3]))
console.log(containsDuplicate([1,2,3,4,5]))