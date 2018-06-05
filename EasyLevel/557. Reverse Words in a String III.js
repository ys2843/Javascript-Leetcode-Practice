/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(function(ele) {
        return ele.split('').reverse().join('');
    }).join(' ');
};