/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a-b).reduce((pre, cur, index) => {
        if (index % 2 ===0) {
        pre+=cur;
    }
    return pre;
});
};