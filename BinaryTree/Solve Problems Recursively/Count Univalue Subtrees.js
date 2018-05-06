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
var countUnivalSubtrees = function(root) {
    var count = 0;
    function check(root) {
        if (!root) {
            return true;
        }
        var l = check(root.left);
        var r = check(root.right);
        if (l && r) {
            if (root.left && root.val !== root.left.val) {
                return false;
            }
            if (root.right && root.val !== root.right.val) {
                return false;
            }
            count++;
            return true;
        }
        return false;
    }
    check(root);
    return count;
};