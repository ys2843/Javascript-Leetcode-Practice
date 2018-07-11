/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let res = "";
    let index = 0;
    for (let i = S.length-1; i >= 0; i--) {
        if (S[i] == '-') {continue;}
        if (index == K) {
            res = '-' + res;
            index = 0;
        }
        res = S[i].toUpperCase() + res;
        index++;
    }
    return res;
};