/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var max = -Infinity, min = Infinity ,start = 0, end = 0;
    nums.forEach(function(ele, i, arr) {
        max = Math.max(ele, max);
        if (ele < max) {
            min = Math.min(min, ele);
            end = i;
        }
    });
    if (end === 0) {
        return 0;
    }
    for (var i = 0; i < nums.length; i++) {
        if (min < nums[i] || nums[i] > nums[i+1]) {
            start = i;
            break;
        }
    }
    return end - start + 1;
};