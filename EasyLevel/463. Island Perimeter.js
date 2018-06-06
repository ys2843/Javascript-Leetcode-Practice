/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var pari = 0;
    grid.forEach(function (row, rowIndex, grid) {
        row.forEach(function (ele, colIndex, row) {
            if (ele === 1) {
                if (rowIndex === grid.length - 1 || grid[rowIndex+1][colIndex] !== 1) {
                    pari++;
                }
                if (rowIndex === 0 || grid[rowIndex-1][colIndex] !== 1) {
                    pari++;
                }
                if (colIndex === row.length - 1 || grid[rowIndex][colIndex+1] !== 1) {
                    pari++;
                }
                if (colIndex === 0 || grid[rowIndex][colIndex-1] !== 1) {
                    pari++;
                }
            }
        })
    });
    return pari;
};