/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(function (ele) {
        return ele.reverse().map(function (e) {return e^1});
    })
};