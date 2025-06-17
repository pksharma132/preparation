function groupAnagrams(strs) {
    function hash(str) {
        const key = Array(26).fill(0);
        for(let i of str) {
            const idx = i.charCodeAt(0) - "a".charCodeAt(0)
            key[idx]++
        }
        return key.join("-");
    }

    const res = new Map();

    for (let i of strs) {
        const key = hash(i);
        if (res.get(key) !== undefined) {
            res.get(key).push(i);
        } else {
            res.set(key, [i])
        }
    }

    return [...res.values()];

}




console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));