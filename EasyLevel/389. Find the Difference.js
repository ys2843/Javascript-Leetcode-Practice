/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sum = 0;
    t.split('').forEach(function (ele) {
        sum += ele.charCodeAt(0);
    });
    s.split('').forEach(function (ele){
        sum -= ele.charCodeAt(0);
    });
    return String.fromCharCode(sum);
};