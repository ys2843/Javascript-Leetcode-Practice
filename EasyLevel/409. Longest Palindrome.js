/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var map = {};
    s.split("").forEach(function (e) {
        map[e] = map[e] ? map[e] + 1 : 1;
    });
    var sum = 0;
    for (let e in map) {
        if (map[e] > 1) {
            sum += map[e] % 2 == 0 ? map[e] : map[e] - 1;
        }
    }
    return s.length > sum ? sum + 1 : sum;
};