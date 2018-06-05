/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return words.filter(function(ele) {
        var arr = ele.toLowerCase().split('');
        var flag = -1, result = true;
        arr.forEach(function (ele, index) {
            var tmp = flag;
            if (rows[0].includes(ele)) {
                flag = 0;
            } else if (rows[1].includes(ele)) {
                flag = 1;
            } else if (rows[2].includes(ele)) {
                flag = 2;
            }

            if (index !== 0 && flag !== tmp) {
                result = false;
            }
        })
        return result;
    })
};