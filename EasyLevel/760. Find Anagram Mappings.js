/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    var result = [];
    A.forEach(function (ele, index) {
        result[index] = B.indexOf(ele);
    });
    return result;
};