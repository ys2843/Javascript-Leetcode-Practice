/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length < 2) {
        if (nums[0] === target) {
            return 0
        } else {
            return -1;
        }
    }
    var l = 0, r = nums.length - 1;
    while (l <= r) {
        var mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[l]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};