function twoSum(nums, target) {
    const cache = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(cache.get(diff)!== undefined) {
            return [i, cache.get(diff)]
        }

        cache.set(nums[i], i)
    }
}

console.log(twoSum([3,4,5,6], 7))



