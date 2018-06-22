/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    var max = 0;
    var postorder = function (root) {
        if (!root) {return 0;}
        var l = postorder(root.left);
        var r = postorder(root.right);
        if (root.left) {l = root.left.val === root.val ? l + 1 : 0}
        if (root.right) {r = root.right.val === root.val ? r + 1 : 0}
        max = Math.max(max, l + r);
        return Math.max(l ,r);
    }
    postorder(root);
    return max;
};