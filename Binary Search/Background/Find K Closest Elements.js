/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    var getClosestIndex = function (arr, x) {
        var left = 0, right = arr.length - 1;
        while (left + 1 < right) {
            var mid = left + Math.floor((right - left) / 2);
            if (arr[mid] === x) {
                return mid;
            } else if (arr[mid] > x) {
                right = mid;
            } else {
                left = mid;
            }
        }
        if (Math.abs(x-arr[left]) <= Math.abs(x-arr[right])) {
            return left;
        } else {
            return right;
        }
    }
    var closestIndex = getClosestIndex(arr, x);
    if (closestIndex <= 0) {
        return arr.slice(0, k);
    } else if (closestIndex === arr.length - 1) {
        return arr.slice(arr.length - k, arr.length);
    } else {
        var firstPart =  arr.slice(0, closestIndex);
        var secPart = arr.slice(closestIndex + 1, arr.length);
        var result = [];
        result.push(arr[closestIndex]);
        while (secPart && firstPart && result.length < k) {
            if (secPart.length === 0 || Math.abs(firstPart[firstPart.length - 1]-x) <= Math.abs(secPart[0]-x)) {
                result.push(firstPart.pop());
            } else {
                result.push(secPart.shift());
            }
        }
    }
    return result.sort(function (a, b) {return a - b;})
};