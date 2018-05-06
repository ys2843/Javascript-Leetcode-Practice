/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var result = [];
    function traverse(root) {
        if (!root) {
            return;
        }
        traverse(root.left);
        traverse(root.right);
        result.push(root.val);
    }
    traverse(root);
    return result;
};