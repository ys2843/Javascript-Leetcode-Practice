/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var h = 0, v = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves.charAt(i) === "U") {
            v++;
        } else if(moves.charAt(i) === "D") {
            v--;
        } else if (moves.charAt(i) === "L") {
            h++;
        } else {
            h--;
        }
    }
    return v === 0 && h === 0;
};