/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (var j = 0; j < needle.length; j++) {
            if (needle.charAt(j) !== haystack.charAt(i+j)) {
                break;
            }
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};