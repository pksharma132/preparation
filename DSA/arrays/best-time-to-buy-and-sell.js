function maxProfit(prices) {
    let left = 0;
    let right = 1;

    let max = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            max = Math.max(prices[right] - prices[left], max);
            right++;
        } else {
            left = right;
            right++;
        }

    }

    return max
}


console.log(maxProfit([7,1,5,3,6,4])); // 5