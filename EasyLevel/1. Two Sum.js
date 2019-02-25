// Brutal force
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Fastest way
var twoSum = function(nums, target) {
    const exist = {};
    for (let i = 0; i < nums.length; i++) {
        if ((typeof exist[target - nums[i]]) !== 'undefined') {
            return [exist[target - nums[i]], i];
        }
        exist[nums[i]] = i;
    }
};