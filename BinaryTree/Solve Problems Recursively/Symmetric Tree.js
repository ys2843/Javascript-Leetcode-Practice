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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function check(left, right) {
        if (!left && !right) {
            return true;
        } else if (!left || !right) {
            return false;
        } else if (left.val === right.val) {
            return check(left.left, right.right) && check(left.right, right.left);
        }
        return false;
    }
    return check(root.left, root.right);
};