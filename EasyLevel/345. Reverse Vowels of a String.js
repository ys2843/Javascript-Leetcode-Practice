/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = "aeiouAEIOU";
    var result = [];
    var tmp = [];
    for (var j = 0; j < s.length; j++) {
        if (vowels.includes(s[j])) {
            tmp.push(s[j])
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            result.push(tmp.pop());
        } else {
            result.push(s[i]);
        }
    }
    return result.join('');
};
