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
var findSecondMinimumValue = function(root) {
    let min = Infinity;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.pop();
            if (node.val > root.val) {
                min = Math.min(min, node.val);
            } else if (node.left) {
                queue.push(node.left, node.right);
            }
        }
    }
    if (min == Infinity) {
        return -1;
    } else {
        return min
    }
};