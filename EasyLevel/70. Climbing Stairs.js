/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    var steps = [];
    steps[1] = 1;
    steps[2] = 2;
    for (var i = 3; i <= n; i++){
        steps[i] = steps[i-1] + steps[i-2];
    }
    return steps[n];
};