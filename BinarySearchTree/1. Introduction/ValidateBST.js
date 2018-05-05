/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var min = null, max = null;
    function BST (root, min, max) {
        if (root === null) {
            return true;
        }
        if (min !== null && root.val <= min) {
            return false;
        }
        if (max !== null && root.val >= max) {
            return false;
        }
        if (root.left && !BST(root.left, min, root.val)) {
            return false;
        }
        if (root.right && !BST(root.right, root.val, max)) {
            return false;
        }
        return true;
    }
    return BST(root, min, max);
};