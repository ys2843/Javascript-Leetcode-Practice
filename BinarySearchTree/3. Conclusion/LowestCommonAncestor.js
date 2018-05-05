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
    if (findNode(root.left, p) && findNode(root.left, q)){
        return lowestCommonAncestor(root.left, p ,q);
    } else if (findNode(root.right, p) && findNode(root.right, q)) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
function findNode(parent, child) {
    if (parent === null) {
        return false;
    }
    if (parent.val === child.val) {
        return true;
    }
    return findNode(parent.left, child) || findNode(parent.right, child);
}