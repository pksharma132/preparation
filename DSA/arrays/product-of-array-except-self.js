
// brute
function productOfArr(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j]
            }
        }

        res.push(product);
    }

    return res;
}

// optimal

function product(nums) {
   const n = nums.length;
    const res = new Array(n).fill(1);
    let left = 1;
    let right = 1;

    for (let i = 0; i < n; i++) {
        res[i] = left;
        left = left * nums[i]
    }

    for (let i = n - 1; i >= 0; i--) {
        res[i] = res[i] * right;
        right = right * nums[i];
    }


    return res;

}



