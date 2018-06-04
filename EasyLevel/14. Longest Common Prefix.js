var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    var reducer = function (pre, cur) {
        var str = '';
        var l = Math.min(pre.length, cur.length);
        for (var i = 0; i < l; i++){
            if (pre[i] !== cur[i]) {
                break;
            }
            str+=pre[i];
        }
        return str;
    }
    return strs.reduce(reducer);
};