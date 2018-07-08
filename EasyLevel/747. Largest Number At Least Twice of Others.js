/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let secmax = -Infinity;
    let index = 0;
    let max = nums[0];
    nums.forEach((ele, i) => {
        if (ele > max) {
        secmax = max;
        max = ele;
        index = i;
    } else if (ele < max && ele > secmax) {
        secmax = ele;
    }
});
    return max >= 2 * secmax ? index : -1;
};