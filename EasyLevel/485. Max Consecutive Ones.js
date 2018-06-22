/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tmp++;
        } else {
            tmp = 0;
        }
        max = Math.max(tmp, max);
    }
    return max;
};