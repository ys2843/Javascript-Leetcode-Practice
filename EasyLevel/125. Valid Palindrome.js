/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var news = "";
    for (let i = 0; i < s.length; i++) {
        if (/[a-z0-9]/i.test(s[i])) {
            news += s[i].toLowerCase();
        }
    }
    return news === news.split("").reverse().join("");
};


var isPalindrome2 = function(s) {
    var start = 0, end = s.length - 1, re = /[a-z0-9]/i;
    while (start < end) {
        if (!re.test(s[start])) {
            start++;
        } else if (!re.test(s[end])) {
            end--;
        } else if (s[start].toLowerCase() == s[end].toLowerCase()) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
};