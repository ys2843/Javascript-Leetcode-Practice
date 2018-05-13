/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function findNode(root, node) {
        if (!root){
            return false;
        }
        return root === node? true : findNode(root.left, node) || findNode(root.right, node);
    }
    function findCommon(root, p, q) {
        if (findNode(root.left, q) && findNode(root.left, p)) {
            return lowestCommonAncestor(root.left, p, q);
        } else if (findNode(root.right, q) && findNode(root.right, p)) {
            return lowestCommonAncestor(root.right, p, q);
        }
        return root;
    }
    if (findNode(p, q)) {
        return p;
    }
    if (findNode(q, p)) {
        return q;
    }
    return findCommon(root, p ,q);
};