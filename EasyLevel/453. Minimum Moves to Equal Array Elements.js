/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    return - Math.min.apply(null, nums) * nums.length + nums.reduce(function (pre, cur) { return pre+cur;});
};