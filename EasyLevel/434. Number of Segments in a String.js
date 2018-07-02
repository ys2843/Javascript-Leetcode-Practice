/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = "a " + s + " a";
    return s.replace(/\s+/g, ' ').split(" ").length - 2;
};