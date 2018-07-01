/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
    var colors = ["aa", "bb", "cc", "dd", "ee", "ff", "11", "22", "33", "44", "55", "66", "77", "88", "99", "00"];
    function findNear(input) {
        var num = parseInt(input, 16);
        var result, min = Infinity;
        for (let i = 0; i < colors.length; i++) {
            if (Math.abs(parseInt(colors[i], 16) - num) < min) {
                min = Math.abs(parseInt(colors[i], 16) - num);
                result = colors[i];
            }
        }
        return result;
    }
    return "#" + findNear(color.slice(1,3)) + findNear(color.slice(3, 5))+ findNear(color.slice(5,7))
};