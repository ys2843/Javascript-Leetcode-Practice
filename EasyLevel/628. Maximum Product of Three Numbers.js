/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length <= 3) {
        return nums.reduce((pre, cur) => pre*cur);
    }
    nums.sort((a, b) => a-b)
    const sumTail = nums[0] * nums[1];
    const sumHead = nums[nums.length - 3] * nums[nums.length-2];
    return Math.max(sumTail, sumHead) * nums[nums.length-1];
};