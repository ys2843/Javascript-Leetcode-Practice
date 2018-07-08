/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs.length == 0) {return 0;}
    const dp = costs[0];
    for (let i = 1; i < costs.length; i++) {
        let [red, blue, green] = dp;
        dp[0] = Math.min(blue, green) + costs[i][0];
        dp[1] = Math.min(red, green) + costs[i][1];
        dp[2] = Math.min(red, blue) + costs[i][2];
    }
    return Math.min.apply(null, dp);
};