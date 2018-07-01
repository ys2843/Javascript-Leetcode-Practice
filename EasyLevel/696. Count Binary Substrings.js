/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var count = 0;
    var pre = 0, cur = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == s.charAt(i-1)) {
            cur++;
        } else {
            pre = cur;
            cur = 1;
        }
        if (cur <= pre) {
            count++;
        }
    }
    return count;
};