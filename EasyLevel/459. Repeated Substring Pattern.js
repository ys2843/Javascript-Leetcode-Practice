/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var sub = s.slice(0, Math.floor(s.length/2));
    var index;
    while ((index = sub.lastIndexOf(s[s.length-1])) != -1) {
        var tk = sub.slice(0, index+1);
        if (tk.repeat(Math.floor(s.length/tk.length)) === s) {return true;}
        sub = sub.slice(0, index);
    }
    return false;
};