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
var getMinimumDifference = function(root) {
    var min = Number.MAX_VALUE, dif;
    var arr = [];
    function traverse(root) {
        if (!root) {
            return;
        }
        traverse(root.left);
        arr.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    for (var i = 1; i < arr.length; i++) {
        dif = Math.abs(arr[i] - arr[i - 1]);
        if (dif < min) {
            min = dif;
        }
    }
    return min;
};

var getMinimumDifferenceRecursive = function(root) {
    let pre = undefined;
    let diff = Infinity;
    function inOrder(root) {
        if (root === null) {
            return;
        }
        inOrder(root.left);
        if (pre !== undefined && diff > root.val - pre) {
            diff = root.val - pre;
        }
        pre = root.val;
        inOrder(root.right);
    }
    inOrder(root);
    return diff;
};