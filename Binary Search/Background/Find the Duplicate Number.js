/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var left = 1, right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        var underMid = 0;
        nums.forEach( ele => {
            if(ele <= mid)
        underMid++;
    });
        underMid <= mid? left = mid + 1 : right = mid - 1;
    }
    return left;
};