/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    var maxArea = -Infinity;
    for (let i in points) {
        for (let j in points) {
            for (let k in points) {
                maxArea = Math.max(maxArea, 0.5 * Math.abs(points[i][0] * points[j][1] + points[j][0] * points[k][1] + points[k][0] * points[i][1] - points[j][0] * points[i][1] - points[k][0] * points[j][1] - points[i][0] * points[k][1]));
            }
        }
    }
    return maxArea;
};