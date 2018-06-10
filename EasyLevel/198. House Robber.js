/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var preMax = 0, curMax = 0;
    nums.forEach(function (ele) {
        var tmp = curMax;
        curMax = Math.max(preMax + ele, curMax);
        preMax = tmp;
    });
    return curMax;
};