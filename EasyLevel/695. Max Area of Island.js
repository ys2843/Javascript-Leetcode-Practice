/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var area = 0;
    var max = 0;
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (DFS2(i, j)) {
                max = Math.max(area, max);
                area = 0;
            }
            function DFS2 (i, j) {
                if (grid[j][i] === 0) {
                    return false;
                }
                grid[j][i] = 0;
                area++;
                if (i < grid[0].length - 1) {
                    DFS2(i+1, j);
                }
                if(i > 0) {
                    DFS2(i-1, j);
                }
                if (j < grid.length - 1) {
                    DFS2(i, j+1);
                }
                if (j > 0) {
                    DFS2(i, j-1)
                }
                return true;
            }
        }

    }
    return max;
};