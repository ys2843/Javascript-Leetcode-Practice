/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    const result = [];
    let start = 0;
    for (let i = 1; i <= S.length; i++) {
        if (S[i] != S[i-1]) {
            if (i-start >= 3) {
                result.push([start, i-1]);
            }
            start = i;
        }
    }
    return result;
};