/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    return findNums.map(function (ele) {
        for (let i = nums.indexOf(ele); i < nums.length; i++) {
            if (nums[i] > ele) {
                return nums[i];
            }
        }
        return -1;
    });
};