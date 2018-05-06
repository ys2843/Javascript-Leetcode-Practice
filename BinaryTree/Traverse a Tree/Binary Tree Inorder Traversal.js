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
var inorderTraversal = function(root) {
    var result = [];
    function traverse (root) {
        if (root === null) {
            return;
        }
        traverse(root.left);
        result.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return result;
};