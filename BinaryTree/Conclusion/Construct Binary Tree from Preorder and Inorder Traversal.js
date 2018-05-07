/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return bfs(0, 0, preorder.length - 1);
    function bfs(index, start, end) {
        if (start > end) {
            return null;
        }
        var nod = new TreeNode(preorder[index]);
        var pos = inorder.indexOf(preorder[index]);
        nod.left = bfs(index + 1, start, pos - 1);
        nod.right = bfs(index + (pos - start) + 1, pos + 1, end);
        return nod;
    };
};