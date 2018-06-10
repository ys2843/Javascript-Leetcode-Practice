/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    return addDigits(num.toString().split('').reduce(function (pre, cur) {return parseInt(pre)+parseInt(cur);}));
};