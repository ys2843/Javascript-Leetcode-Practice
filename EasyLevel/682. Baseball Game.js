/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var tmp = [];
    for (var i = 0; i < ops.length; i++){
        switch (ops[i]) {
            case 'C':
                tmp.pop();
                break;
            case 'D':
                tmp.push(tmp[tmp.length-1] * 2);
                break;
            case '+':
                tmp.push(tmp[tmp.length-1] +tmp[tmp.length-2]);
                break;
            default:
                tmp.push(parseInt(ops[i]));
        }
    }
    return tmp.reduce(function(pre,cur) {
        return cur+pre;
    });
};