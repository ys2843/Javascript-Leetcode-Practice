/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0, right = nums.length - 1;
    while (left + 1 < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[right] > nums[left]) {
            return nums[left];
        } else {
            if (nums[mid] < nums[mid-1]) {
                return nums[mid];
            } else if (nums[mid] > nums[right]) {
                left = mid;
            } else if (nums[mid] < nums[right]){
                right = mid;
            } else {
                var tag = true;
                for (let i = mid + 1; i < right; i++) {
                    if (nums[i] !== nums[mid]) {
                        tag = false;
                        break;
                    }
                }
                if (tag) {
                    right = mid;
                } else {
                    left = mid;
                }
            }
        }
    }
    if (nums[right] < nums[left]) {
        return nums[right];
    } else {
        return nums[left];
    }
};