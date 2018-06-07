/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (r * c !== nums.length * nums[0].length) {
        return nums;
    }
    var result = [];
    var newRow = [];
    nums.forEach(function (row) {
        row.forEach(function (ele) {
            if (newRow.length < c) {
                newRow.push(ele);
            } else {
                result.push(newRow);
                newRow = [];
                newRow.push(ele);
            }
        });
    });
    result.push(newRow)
    return result;
};