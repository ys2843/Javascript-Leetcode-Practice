/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var inOrderArr = [];
    var arr = [];
    var inOrder = function (root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        inOrderArr.push(Math.abs(root.val - target));
        arr.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return arr[inOrderArr.indexOf(Math.min.apply(this, inOrderArr))];
};