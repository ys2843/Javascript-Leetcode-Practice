/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var count = 0;
    for (let i = L; i <= R; i++) {
        var setBits = 0;
        var s = i.toString(2);
        for (let j = 0; j < s.length; j++) {
            if (s.charAt(j) === '1') {
                setBits++;
            }
        }
        if (isPrime(setBits)) {
            count++;
        }
    }
    return count;
};

function isPrime(n) {
    if(n <= 1) return false

    var root = Math.floor(Math.sqrt(n))
    for(i = 2; i <= root; i++) {
        if(n % i == 0) return false
    }
    return true
}