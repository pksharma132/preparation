function longestConsecutiveSequence(nums) {
    let set = new Set(nums);
    let max = 0;
    for (let i of set) {
        const isAStart = !set.has(i+1);
        

        if (isAStart) {
            let current = i;
            let sequence = 1;

            while(set.has(current - 1)) {
                current--;
                sequence++
            }

            max = Math.max(max, sequence);
        }
    }

    return max;
    
};


/**
 * 1. check if the number is a starting of a sequence (number + 1 doesn't exist in the set)
 * 2. check until when the sequence continues (while number - 1 exists in the set)
 */