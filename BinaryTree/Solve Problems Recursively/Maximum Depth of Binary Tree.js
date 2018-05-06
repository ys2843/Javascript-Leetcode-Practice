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
var maxDepth = function(root){
    var max = 0;
    function findDepth(root, height){
        if (!root) {
            return;
        }
        if (height > max) {
            max = height;
        }
        findDepth(root.left, height + 1);
        findDepth(root.right, height + 1);
    }
    findDepth(root, 1);
    return max;
}
/**
 var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }
    function findDepth(r) {
        if (r == null) {
           return 0;
        }
        return Math.max(findDepth(r.left), findDepth(r.right)) + 1;
    }
    return findDepth(root);

};
 */