/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = [];
    while (nums1.length !== 0 && nums2.length !== 0) {
        if (nums1[0] > nums2[0]) {
            newArr.push(nums2.shift());
        } else {
            newArr.push(nums1.shift());
        }
    }
    if (nums1.length === 0) {
        newArr = newArr.concat(nums2);
    } else {
        newArr = newArr.concat(nums1);
    }
    return newArr.length % 2 === 0 ? (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2 : newArr[Math.floor(newArr.length / 2)];
};