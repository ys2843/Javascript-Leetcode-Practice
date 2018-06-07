/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var result = true;
    matrix.reduce(function (pre, cur){
        if (pre.slice(0,-1).join() !== cur.slice(1).join()) {
            result = false;
        }
        return cur;
    });
    return result;
};