/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    if (abbr.length > word.length) {return false;}
    var tmp = "";
    var index = 0;
    for (let i = 0; i < abbr.length; i++) {
        if (/[0-9]/.test(abbr[i])) {
            tmp += abbr[i];
        } else {
            if (tmp) {
                if (tmp.charAt(0) === '0') {return false;}
                index += Number(tmp);
                tmp = "";
            }
            if (abbr[i] != word[index]) {
                return false;
            }
            index++;
        }
    }
    if (tmp && (Number(tmp)+index !== word.length) || tmp.charAt(0) === '0') {
        return false;
    }
    return true;
};