/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var start = 0, end = A.length - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (A[mid] > A[mid-1] && A[mid] > A[mid+1]) {
            return mid;
        } else if (A[mid] > A[mid+1]) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
};