/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.arr = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.arr.push(number);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    this.arr.sort((a, b) => a-b);
    var left = 0, right = this.arr.length - 1;
    while (left < right) {
        if (this.arr[left] + this.arr[right] === value) {
            return true;
        } else if (this.arr[left] + this.arr[right] > value) {
            right--;
        } else {
            left++;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */