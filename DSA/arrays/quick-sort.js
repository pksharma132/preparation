
function partition(nums, low, high) {
    const pivot = nums[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (nums[j] < pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    [nums[i+1], nums[high]] = [nums[high], nums[i + 1]]

    return i + 1;
}


function quickSort(nums, low = 0, high = nums.length - 1) {

    if (low < high) {
        const pivotIdx = partition(nums, low, high);
        quickSort(nums, low, pivotIdx - 1);
        quickSort(nums, pivotIdx + 1, high);
    }

    return nums;
}


console.log(quickSort([7,5,6,1,3,2,4]));