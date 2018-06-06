/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var dic = {};
    s.split('').forEach(function (ele) {
        if (dic.hasOwnProperty(ele)) {
            dic[ele]++;
        } else {
            dic[ele] = 1;
        }
    });
    var count = 0;
    for (var i in dic) {
        if (dic[i] % 2 !== 0) {
            count++;
        }
    }
    if (s.length % 2 === 0) {
        return count === 0;
    } else {
        return count < 2;
    }
};