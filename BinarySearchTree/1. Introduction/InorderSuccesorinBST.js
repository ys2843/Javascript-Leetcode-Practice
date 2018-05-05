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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (p.right) {
        return findSuc(p.right);
    }
    return findParent(root, null, p);
    function findSuc(p) {
        while (p.left) {
            p = p.left;
        }
        return p;
    }
    function findParent(root, parent, p) {
        if (root.val === p.val || root === null || p === null) {
            return parent;
        } else if (root.val < p.val) {
            return findParent(root.right, parent, p);
        } else if (root.val > p.val) {
            return findParent(root.left, root, p);
        }
    }
};