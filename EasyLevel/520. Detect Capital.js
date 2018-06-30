/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length === 1) {return true;}
    if (/[A-Z]/.test(word.charAt(0))) {
        var capCount = 0;
        for (let i = 1; i < word.length; i++) {
            if (/[A-Z]/.test(word.charAt(i))) {
                capCount++;
            }
        }
        if (capCount === word.length - 1 || capCount === 0) {
            return true;
        }
        return false;
    } else {
        return !/[A-Z]/.test(word.substring(1));
    }
};