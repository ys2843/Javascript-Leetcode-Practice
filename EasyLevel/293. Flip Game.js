/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var result = [];
    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i+1] === '+') {
            var tmp = '';
            tmp = s.slice(0, i) + '--' + s.slice(i+2)
            result.push(tmp);
        }
    }
    return result;
};