/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function(flowers, k) {
    var blo = new Array(flowers.length).fill(0);
    for (let i = 0; i < flowers.length; i++) {
        blo[flowers[i]-1] = 1;
        var leftIndex = blo.slice(0, flowers[i]-1).lastIndexOf(1);
        var rightIndex = blo.slice(flowers[i]).indexOf(1);
        if (rightIndex != -1) {rightIndex += flowers[i];}
        if ((leftIndex >= 0 && flowers[i]-1 - leftIndex == k + 1) || (rightIndex >= 0 && rightIndex - flowers[i] == k)) {
            return i + 1;
        }
    }
    return -1;
};
