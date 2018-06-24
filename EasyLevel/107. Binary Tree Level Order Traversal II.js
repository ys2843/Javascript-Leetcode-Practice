/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    var queue = [];
    var result = [];
    queue.push(root);
    while(queue.length > 0) {
        var len = queue.length;
        var tmp = [];
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.unshift(tmp);
    }
    return result;
};