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
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    var queue = [];
    var result = [];
    queue.push(root);
    while (queue.length !== 0) {
        var l = queue.length;
        var tmp = [];
        for (var i = 0; i < l; i++) {
            var n = queue.shift();
            tmp.push(n.val);
            if (n.left) { queue.push(n.left);}
            if (n.right) {queue.push(n.right);}
        }
        result.push(tmp);
    }
    return result;
};