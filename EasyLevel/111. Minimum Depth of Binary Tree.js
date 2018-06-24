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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    var queue = [];
    var dep = 1;
    queue.push(root);
    while (queue.length > 0) {
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            if (!node.left && !node.right) {
                return dep;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        dep++;
    }
};