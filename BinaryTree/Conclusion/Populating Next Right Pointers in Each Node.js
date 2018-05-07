/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    var queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        var l = queue.length;
        for (var i = 0; i < l; i++) {
            var nod = queue.shift();
            if (!nod) {
                break;
            }
            if (i < l-1) {
                nod.next = queue[0];
            }
            queue.push(nod.left, nod.right);
        }
    }
};