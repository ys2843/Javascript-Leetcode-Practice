/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    while(bits.length > 1) {
        if (bits[0] === 1) {
            bits.shift();
            bits.shift();
        } else {
            bits.shift();
        }
    }
    return bits.length === 0 ? false : true;
};