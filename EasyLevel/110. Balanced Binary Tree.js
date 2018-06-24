/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var result = true;
    DFS(root);
    return result;
    function DFS(root) {
        if (!root) {return 0;}
        var l = DFS(root.left);
        var r = DFS(root.right);
        if (Math.abs(l-r) > 1) {
            result = false;
            return;
        }
        return Math.max(l, r) + 1;
    }
};