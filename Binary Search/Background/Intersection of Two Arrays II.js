/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    return nums1.filter((ele) => {
        var index = nums2.indexOf(ele);
    if (index !== -1) {
        delete nums2[index];
        return true;
    }
    return false;
});
};