/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return parseInt(n.toString(2).split('').reduce(function(pre, cur) {
        return parseInt(pre) + parseInt(cur);
    }));
};