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
var preorderTraversal = function(root) {
    var preorder = [];
    function traverse(root) {
        if (!root) {
            return;
        }
        preorder.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return preorder;
};