/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    while (left <= right) {
        var isD = true;
        for (var i of left.toString()) {
            if (left % i !== 0) {
                isD = false;
            }
        }
        if (isD) {
            result.push(left);
        }
        left++;
    }
    return result;
};