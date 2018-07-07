/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Infinity;
    var sum = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
        }
        if ((i == prices.length-1 || prices[i+1] <= prices[i]) && prices[i] > prices[i-1]) {
            sum += (prices[i] - min);
            min = Infinity;
        }
    }
    return sum;
};