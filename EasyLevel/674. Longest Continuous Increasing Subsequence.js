/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > (nums[i-1] || 0)) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    return Math.max(max, count);
};