/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     var result = 0;
//     if (x >= 0) {
//         result = parseInt(x.toString().split('').reverse().join(''));
//     } else {
//         result = - parseInt((-x).toString().split('').reverse().join(''));
//     }
//     if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)){
//         return 0;
//     }
//     return result;
// };

var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        let tmp = x > 0 ? Math.floor(x % 10) : Math.ceil(x % 10);
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x/10);
        rev = rev * 10 + tmp;
        if (rev > 2147483648 || (rev == 2147483648 && tmp > 7)) return 0;
        if (rev < -2147483647 || (rev == -2147483647 && tmp < -8)) return 0;
    }
    return rev;
};