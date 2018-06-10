/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var nums1Index = m - 1;
    var nums2Index = n - 1;
    for (var i = n + m - 1; i >= 0; i--) {
        if (nums2Index < 0 || nums1[nums1Index] > nums2[nums2Index]) {
            nums1[i] = nums1[nums1Index];
            nums1Index--;
        } else {
            nums1[i] = nums2[nums2Index];
            nums2Index--;
        }
    }

};