/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
var boldWords = function(words, S) {
    var arr = new Array(S.length).fill(0);
    words.forEach(function (ele) {
        var tmp = S;
        var comp = 0;
        while (tmp.indexOf(ele) != -1) {
            var index = tmp.indexOf(ele) + comp;
            for (let i = index; i < index + ele.length; i++) {
                arr[i] = 1;
            }
            tmp = tmp.slice(tmp.indexOf(ele) + 1);
            comp = index + 1;
        }
    });
    var result = "";
    if (arr[0] == 1) {
        result += "<b>"
    }
    for (let i = 0; i < S.length; i++) {
        result += S.charAt(i);
        if (arr[i] == 0 && arr[i+1] == 1) {
            result += "<b>";
        }
        if (arr[i] == 1 && arr[i+1] == 0 || (i == S.length - 1 && arr[i] == 1)) {
            result += "</b>";
        }
    }
    return result;
};