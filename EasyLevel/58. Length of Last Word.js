/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = ("a " + s + " a").replace(/\s+/g, " ").split(" ");
    return s.length == 2 ? 0 : s[s.length - 2].length;
};
