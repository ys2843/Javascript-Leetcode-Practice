/**
 * @param {string} S
 * @return {string[]}
 */
// BFS
var letterCasePermutation = function(S) {
    var result = [S];
    for (let i = 0; i < S.length; i++) {
        if (!/[0-9]/.test(S.charAt(i))) {
            for (let j = 0, len = result.length; j < len; j++) {
                var tmp = result.shift();
                result.push(tmp.slice(0, i) + tmp[i].toLowerCase() + tmp.slice(i+1), tmp.slice(0, i) + tmp[i].toUpperCase() + tmp.slice(i+1));
            }
        }
    }
    return result;
};