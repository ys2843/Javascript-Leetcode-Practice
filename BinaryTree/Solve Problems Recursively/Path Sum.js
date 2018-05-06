/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function check(root, sum, tmp) {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return root.val + tmp === sum;
        }
        return check(root.left, sum, tmp + root.val) || check(root.right, sum, tmp + root.val);
    }
    return check(root, sum, 0);
};