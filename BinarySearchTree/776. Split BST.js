/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function(root, V) {
    var minTree = null, maxTree = null;
    function traverse(root) {
        if (root === null) {
            return;
        }
        if (V >= root.val) {
            minTree = insert(minTree, root.val);
        } else {
            maxTree = insert(maxTree, root.val);
        }
        traverse(root.left);
        traverse(root.right);
    }
    function insert(root, val) {
        if (root === null) {
            return new TreeNode(val);
        }
        if (root.val < val) {
            root.right = insert(root.right, val);
        } else {
            root.left = insert(root.left, val);
        }
        return root;
    }
    traverse(root);
    return [minTree, maxTree];
};