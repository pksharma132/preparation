function lengthOfLongestSubstringWithoutRepeatingChars(s) {

    let set = new Set();
    let left = 0;
    let max = 0;


    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left += 1;
        }
        set.add(s[right]);
        max = Math.max(max, set.size);
    }

    return max;

}

console.log(lengthOfLongestSubstringWithoutRepeatingChars("abcabcbb"));