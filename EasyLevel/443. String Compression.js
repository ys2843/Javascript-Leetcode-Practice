/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var cache = chars.shift(), count = 1;
    chars.push("End");
    for (let i = 0, len = chars.length; i < len; i++) {
        var tmp = chars.shift();
        if (cache == tmp) {
            count++;
        } else {
            chars.push(cache);
            if (count > 1) {
                Array.prototype.push.apply(chars, String(count).split(""));
            }
            cache = tmp;
            count = 1;
        }
    }
    return chars.length;
};