/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var oldColor = image[sr][sc];
    if (newColor === oldColor) {return image;}
    var fill = function (i ,j) {
        if (image[i][j] !== oldColor) {
            return;
        }
        image[i][j] = newColor;
        if (i > 0) {
            fill(i-1, j);
        }
        if (i < image.length - 1) {
            fill(i+1, j);
        }
        if (j > 0) {
            fill(i, j-1);
        }
        if (j < image[0].length - 1) {
            fill(i, j+1);
        }
    }
    fill(sr, sc);
    return image;
};