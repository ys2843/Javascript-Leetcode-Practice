/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b);
    s.sort((a, b) => a-b);
    var num = 0;
    s.forEach(function (e) {
        if (e >= g[num]) {
            num++;
        }
    });
    return num;
};