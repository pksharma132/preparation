function longestRepeatingCharReplacement (s, k) {
    let left = 0;
    let count = {};
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]] = 1 + (count[s[right]] || 0);

        while(((right - left + 1) - Math.max(...Object.values(count))) > k) {
            count[s[left]] -= 1;
            left += 1;

        }

        max = Math.max(max, right - left + 1);
    }

    return max;
    
};

console.log(longestRepeatingCharReplacement("XYYX", 2)); // 4

/**
 * keep track of the frequency of the character of the window
 * shrink the size of the window until it becomes valid ie length of the window - max freq of the character in the window <= k
 * 
 */