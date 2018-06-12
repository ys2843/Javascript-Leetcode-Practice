/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    function validateTree (node1, node2) {
        if (!node1 || !node2) {
            return !node1 && !node2;
        } else if (node1.val === node2.val) {
            return validateTree(node1.left, node2.left) && validateTree(node1.right, node2.right);
        }
        return false;
    }
    if (!s) {
        return !t;
    }
    return validateTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};