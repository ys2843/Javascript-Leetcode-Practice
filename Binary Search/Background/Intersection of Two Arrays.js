/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return nums1.filter((ele) => nums2.includes(ele)).filter((ele, index, arr) => arr.indexOf(ele) === index);
};