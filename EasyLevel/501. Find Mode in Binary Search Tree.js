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
var findMode = function(root) {
    var map = {};
    function itr (root) {
        if (!root) {
            return;
        }
        map[root.val] = map[root.val] + 1 || 1;
        itr(root.left);
        itr(root.right);
    }
    itr(root);
    let max = 0;
    const res = [];
    for (let ele in map) {
        if (map[ele] > max) {
            max = map[ele];
        }
    }
    for (let ele in map) {
        if (map[ele] === max) {
            res.push(Number(ele));
        }
    }
    return res;
};