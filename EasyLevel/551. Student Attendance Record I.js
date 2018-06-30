/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var A = 0, L = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'A') {
            A++;
        }
        if (s.charAt(i) === 'L') {
            L++;
        } else {
            L = 0;
        }
        if (A > 1 || L > 2) {
            return false;
        }
    }
    return true;
};