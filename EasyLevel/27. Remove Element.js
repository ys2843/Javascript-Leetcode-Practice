/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    for (let i = 0; i < len; i++) {
        let tmp = nums.shift();
        if (tmp != val) {
            nums.push(tmp);
        }
    }
    return nums.length;
};