/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length < 2 * k) {
        return reverse(s.slice(0, k)) + s.slice(k);
    }
    return reverse(s.slice(0, k)) + s.slice(k, 2 * k) + reverseStr(s.slice(2 * k), k);
};

function reverse (s) {
    var result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        result += s.charAt(i);
    }
    return result;
}