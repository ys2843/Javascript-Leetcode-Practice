/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    function getDistance (a, b) {
        return Math.pow((a[0] - b[0]), 2)+ Math.pow((a[1] - b[1]), 2);
    }
    var result = 0;
    for (let i = 0; i < points.length; i++) {
        var set = {};
        for (let j = 0; j < points.length; j++) {
            if (points[i] == points[j]) {
                continue;
            }
            var dis = getDistance(points[i], points[j]);
            set[dis] && (result += set[dis]  * 2);
            set[dis] = set[dis] ? set[dis] + 1 : 1;
        }
    }
    return result;
};