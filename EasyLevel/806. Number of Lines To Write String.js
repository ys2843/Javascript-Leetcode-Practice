/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var lines = 1, units = 0;
    S.split('')
        .map(ele => widths[ele.charCodeAt()-'a'.charCodeAt()])
.reduce((pre, cur) => {
        if (pre + cur <= 100) {
        units = pre+cur;
        return pre+cur;
    } else {
        lines++;
        units = cur;
        return cur
    }
});
    return [lines, units];
}; 