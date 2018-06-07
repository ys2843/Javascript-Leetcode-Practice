/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) {
        return [];
    }
    var avg = [];
    var queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        var l = queue.length;
        var sum = 0;
        for (var i = 0; i < l; i++) {
            var node = queue.shift();
            sum = sum + node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        avg.push(sum/l);
    }
    return avg;
};