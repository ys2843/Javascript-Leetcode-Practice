/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var h = 0, p = 0;
    for (var i of moves) {
        switch (i) {
            case 'U':
                p+=1;
                break;
            case 'D':
                p-=1;
                break;
            case 'L':
                h-=1;
                break;
            case 'R':
                h+=1;
        }
    }
    return h === 0 && p === 0;
};