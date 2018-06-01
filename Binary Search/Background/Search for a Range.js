/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums) {
        return [-1,-1];
    }
    var findStart = function (nums, target) {
        var left = 0, right = nums.length - 1;
        while (left + 1 < right) {
            var mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                if (nums[mid-1] !== target) {
                    return mid;
                } else {
                    right = mid;
                }
            } else if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (nums[left] === target) {
            if (left === 0 || nums[left-1] !== target){
                return left;
            }
        } else if (nums[right] === target && nums[left] !== target) {
            return right;
        } else {
            return -1;
        }
    }
    var findEnd = function (nums, target) {
        var left = 0, right = nums.length - 1;
        while (left + 1 < right) {
            var mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                if (nums[mid+1] !== target) {
                    return mid;
                } else {
                    left = mid;
                }
            } else if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (nums[right] === target) {
            if (right === nums.length-1 || nums[right] !== target){
                return right;
            }
        } else if (nums[left] === target && nums[right] !== target) {
            return left;
        } else {
            return -1;
        }
    }
    var start = findStart(nums, target);
    var end = findEnd(nums, target);
    return [start, end];
};