/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [1];
    var i = 1;
    while (i <= rowIndex) {
        for (var j = i; j > 0; j--) {
            if (j === i) {
                row[j] = 1;
            } else {
                row[j] = row[j] + row[j-1];
            }
        }
        i++;
    }
    return row;
};