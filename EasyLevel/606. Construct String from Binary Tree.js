/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    var result = "";
    var preorder = function (root, str) {
        if (!root) {
            str += "()";
            return str;
        }
        str += '(';
        str +=  root.val;
        if (root.left || root.right) {
            str = preorder(root.left, str);
        }
        if (root.right) {
            str = preorder(root.right, str);
        }
        str += ')';
        return str;
    }
    return preorder(t, result).slice(1, -1);
};