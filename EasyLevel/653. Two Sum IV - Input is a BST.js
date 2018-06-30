/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var diff = new Set();
    var preorder = function (root) {
        if (!root) {return false;}
        if (diff.has(root.val)) {
            return true;
        }
        diff.add(k - root.val);
        return preorder(root.left) || preorder(root.right);
    }
    return preorder(root);
};