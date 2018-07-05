/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    function checkLeftLeaves (root, isLeft) {
        if (!root) {
            return;
        }
        if (!root.left && !root.right && isLeft) {
            sum += root.val;
        }
        if (root.left) {
            checkLeftLeaves(root.left, true);
        }
        if (root.right) {
            checkLeftLeaves(root.right, false);
        }
    }
    checkLeftLeaves(root, false);
    return sum;
};