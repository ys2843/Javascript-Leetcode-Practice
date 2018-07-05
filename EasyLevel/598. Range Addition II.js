/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    ops.forEach(function (ele) {
        m = Math.min(m, ele[0]);
        n = Math.min(n, ele[1]);
    });
    return m * n;
};