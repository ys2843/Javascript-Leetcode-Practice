/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var queue = [];
    var result = '';
    queue.push(root);
    while (queue.length !== 0) {
        var l = queue.length;
        for (var i = 0; i < l; i++) {

            var node = queue.shift();
            if (!node) {
                result += 'null';
                result += ',';
                continue;
            }
            result += node.val;
            result += ',';
            if (!node.left && !node.right) {
                continue;
            }
            queue.push(node.left, node.right);
        }
    }

    return result.slice(0, -1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arr = data.split(',');
    var queue = [];
    var root = new TreeNode(arr.shift());
    queue.push(root);
    while(queue.length !== 0) {
        var l = queue.length;
        for (var i = 0; i < l; i++) {
            var left = new TreeNode(arr.shift());
            var right = new TreeNode(arr.shift());
            var node = queue.shift();
            node.left = left;
            node.right = right;
            queue.push(left, right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */