/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    var path = [];
    var findPath = function (root, path) {
        if (!root) {
            return;
        }
        path.push(root.val);
        if (!root.left && !root.right) {
            result.push(path.join('->'));

        }
        findPath(root.left, path);
        findPath(root.right, path);
        path.pop();
    }
    findPath(root, path);
    return result;
};