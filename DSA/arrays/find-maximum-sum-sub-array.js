/** Messed this up in an interview ;-( */

// kadane's algorthim

function maxSumSubArray(arr) {
    let max = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        max = Math.max(max, currentSum);
    }

    return max;

}







console.log(maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]))