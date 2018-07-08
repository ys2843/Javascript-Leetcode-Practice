/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n == 0) {return 0;}
    if (n == 1) {return k;}
    let same = k;
    let dif = k * (k - 1);
    for (let i = 3; i <= n; i++) {
        let tmp = same;
        same = dif;
        dif = tmp*(k-1) + dif * (k-1);
    }
    return same + dif;
};