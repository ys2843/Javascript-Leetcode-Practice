/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = {};
    let max = 0;
    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        max = Math.max(max, map[nums[i]]);
    }
    for (let ele in map) {
        if (map[ele] == max) {
            result = Math.min(result, nums.lastIndexOf(Number(ele)) - nums.indexOf(Number(ele)) + 1);
        }
    }
    return result;
};
