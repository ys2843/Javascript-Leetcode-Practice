/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var temp = [];

    nums.reduce(function(total, cur, i){
        total += cur
        temp[i] = total;
        return total;
    }, 0);

    this.nums = temp;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.nums[j] - (this.nums[i-1] || 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */