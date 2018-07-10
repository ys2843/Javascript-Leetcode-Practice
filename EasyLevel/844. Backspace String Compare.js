/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function write(s){
        let str = [];
        for (let i = 0; i < s.length; i++) {
            let tmp = s[i];
            if (tmp == "#") {
                str.pop();
            } else {
                str.push(tmp);
            }
        }
        return str.join();
    }
    return write(S) == write(T);
};