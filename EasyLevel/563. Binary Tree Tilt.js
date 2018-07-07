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
var findTilt = function(root) {
    var sum = 0;
    function botToTop (root) {
        if (!root) {
            return 0;
        }
        var left = botToTop(root.left);
        var right = botToTop(root.right);
        sum += Math.abs(left - right);
        return left + right + root.val;
    }
    botToTop(root);
    return sum;
};