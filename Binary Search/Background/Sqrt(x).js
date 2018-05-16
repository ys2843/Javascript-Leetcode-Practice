/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 0, r = x;
    while (l <= r) {
        var mid = Math.floor(l + (r-l) / 2);
        if (mid * mid <= x && (mid+1) * (mid+1) > x) {
            return mid;
        } else if (mid * mid > x) {
            r = mid - 1;
        } else if (mid*mid<x) {
            l = mid + 1;
        }
    }
};