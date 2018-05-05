/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    function insert(root, val) {
        if (root.val > val) {
            if (root.left) {
                insertIntoBST(root.left, val);
            } else {
                root.left = new TreeNode(val);
                return;
            }
        } else if (root.val < val) {
            if (root.right) {
                insertIntoBST(root.right, val);
            } else {
                root.right = new TreeNode(val);
                return;
            }
        }
    }
    insert(root, val);
    return root;
};