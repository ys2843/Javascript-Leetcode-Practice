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
var diameterOfBinaryTree = function(root) {
    var dia = 0;
    function helper (root) {
        if (!root) {
            return 0;
        }
        var left = helper(root.left);
        var right = helper(root.right);
        dia = Math.max(left + right, dia);
        return Math.max(left, right) + 1;
    }
    helper(root);
    return dia;
};