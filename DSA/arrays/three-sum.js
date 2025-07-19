// sort to avoid duplicated and find the two sum with two pointers
// to avoid duplicates skip the indexes until the value is same as the previous index
// if a valid triplet is found then skip the indexes until the value is the same similar to the start of the loop


function threeSum(nums) {
    nums.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && (nums[i] === nums[i - 1])) continue;
        const target = -1 * nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                res.push([nums[i], nums[left], nums[right]]);

                left++;

                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }

            } else if (sum > target) {
                right--;
            } else {
                left++
            }
        }
    }

    return res;
}

