/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {return false;}
    while (n.toString().indexOf('.') === -1) {
        if (n === 1) {return true;}
        n /= 2;
    }
    return false;
};