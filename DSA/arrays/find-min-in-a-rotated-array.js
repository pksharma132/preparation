function findMin(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }

    return arr[left];
}



/** since the array is sorted in two parts 
 *  if the mid is greater than the rightmost part the
 *  minimum value is in the right part else in the
 *  left part
 * 
 * 
 */

console.log(findMin([3,4,5,6,1,2])) // 1