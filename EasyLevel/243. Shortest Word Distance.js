/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var tmp, tmpIndex=-1, dis = Infinity;
    words.forEach(function (ele, index) {
        if (ele === word1 || ele === word2) {
            if (tmpIndex >= 0 && ele !== tmp) {
                dis = Math.min(index - tmpIndex, dis);
            }
            tmp = ele;
            tmpIndex = index;

        }
    });

    return dis;
};