/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    if (x >= 0) {
        result = parseInt(x.toString().split('').reverse().join(''));
    } else {
        result = - parseInt((-x).toString().split('').reverse().join(''));
    }
    if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)){
        return 0;
    }
    return result;
};