/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let sum = (nums.length + 1) * nums.length / 2;
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
        if (nums.lastIndexOf(nums[i]) !== i) {
            res.push(nums[i])
        }
    }
    res.push(res[0] + sum);
    return res;
};