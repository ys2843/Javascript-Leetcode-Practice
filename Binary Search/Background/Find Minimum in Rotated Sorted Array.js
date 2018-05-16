/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums) {
        return nums;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    var l = 0, r = nums.length-1;
    while (l <= r) {
        var mid = Math.floor(l + (r - l) / 2);
        if ((mid > 0 && nums[mid] < nums[mid-1]) || (nums[mid] < nums[mid-1] && nums[mid+1] === undefined) ) {
            return nums[mid];
        }
        if (nums[l] < nums[r]) {
            return nums[l]
        } else {
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
};