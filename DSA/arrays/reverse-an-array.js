function reverseArray(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

console.log(reverseArray([1,2,3,4,5]));