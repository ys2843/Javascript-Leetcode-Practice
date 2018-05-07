/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return insert(postorder.length - 1, 0, postorder.length - 1);
    function insert (index, start, end) {
        if (start > end) {
            return null;
        }
        var Node = new TreeNode(postorder[index]);
        var pos = inorder.indexOf(postorder[index]);
        Node.left = insert(index - (end - pos ) - 1, start, pos - 1);
        Node.right = insert(index - 1, pos + 1, end);
        return Node;
    }
};