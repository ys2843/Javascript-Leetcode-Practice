/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n == 0) {return 0;}
    if (n == 1) {return 1;}
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        if (sum > n) {
            return i-1;
        }
    }
};


