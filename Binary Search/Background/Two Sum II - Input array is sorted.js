/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        var dif = target - numbers[i];
        var left = 0, right = numbers.length - 1;
        while (left <= right) {
            var mid = left + Math.floor((right - left) / 2);
            if (mid !== i && numbers[mid] === dif) {
                return [i+1, mid+1];
            } else if (numbers[mid] > dif) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
};