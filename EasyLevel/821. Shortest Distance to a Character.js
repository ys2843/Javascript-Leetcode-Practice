/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var result = [];
    for (var i = 0; i < S.length; i++) {
        var firstHalf = S.substring(0, i);
        var secondHalf = S.substring(i);
        var firstIndex = firstHalf.length - firstHalf.lastIndexOf(C);
        var secondIndex = secondHalf.indexOf(C);
        if (secondIndex === -1) {
            result.push(firstIndex);
        } else {
            if (firstIndex > firstHalf.length || secondIndex < firstIndex) {
                result.push(secondIndex);
            } else {
                result.push(firstIndex);
            }
        }
    }
    return result;
};