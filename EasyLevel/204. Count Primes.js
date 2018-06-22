/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrime = new Array(n).fill(1);
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i] === 0) continue;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = 0
        }
    }
    var count = 0;
    isPrime.forEach(function (ele, i) {
        if (i >= 2 && ele === 1) count++;
    });
    return count;
};