/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var set = {};
    if (s.length !== t.length) {
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        if (!set.hasOwnProperty(s[i])) {
            set[s[i]] = 1;
        } else {
            set[s[i]] += 1;
        }
        if (!set.hasOwnProperty(t[i])) {
            set[t[i]] = -1;
        } else {
            set[t[i]] -= 1;
        }
    }
    for (var k in set) {
        if (set[k] > 0) {
            return false;
        }
    }
    return true;
};