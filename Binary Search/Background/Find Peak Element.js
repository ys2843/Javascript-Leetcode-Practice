/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var l = 0, r = nums.length-1;
    if (nums.length === 1) {
        return 0;
    }
    while (l < r) {
        var mid = Math.floor(l + (r - l) / 2);
        if ((mid===0 && nums[mid+1] < nums[mid]) || (mid===nums.length-1 &&nums[mid]>nums[mid-1]) || (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid+1])) {
            return mid;
        }
        if (mid > 0 && nums[mid] < nums[mid-1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    if (l === nums.length - 1) {
        return l;
    }
};