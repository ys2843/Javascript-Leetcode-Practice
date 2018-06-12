/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    var count = 0;
    function helper (root, sumArr) {
        if (!root) {
            return 0;
        }
        var newSum = sumArr.map(function (ele) {
            if (ele === root.val) {
                count++;
            }
            return ele - root.val;
        });
        newSum.push(sum);
        helper(root.left, newSum)
        helper(root.right, newSum);
    }
    helper(root, [sum])
    return count;
};