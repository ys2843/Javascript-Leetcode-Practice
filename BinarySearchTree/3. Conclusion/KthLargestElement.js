/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.root = null;
    for (var i = 0; i < nums.length; i++) {
        this.root = insert(this.root, nums[i]);
    }
};

function insert(root, element) {
    if (root === null) {
        var n = new TreeNode(element);
        n.cnt = 1;
        return n;
    }
    if (root.val > element) {
        root.left = insert(root.left, element);
    } else {
        root.right = insert(root.right, element);
    }
    root.cnt++;
    return root;
}
function search(root, val) {
    var m = root.right !== null ? root.right.cnt + 1 : 1;
    if (val === m) {
        return root.val;
    }
    if (val > m) {
        return search(root.left, val - m);
    } else {
        return search(root.right, val)
    }
}
/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.root = insert(this.root, val);
    return search(this.root, this.k);
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */