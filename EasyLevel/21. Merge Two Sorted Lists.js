/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = [];
    while (l1 && l2) {
        if (l1.val < l2.val) {
            result.push(l1.val);
            l1 = l1.next;
        } else {
            result.push(l2.val);
            l2 = l2.next;
        }
    }
    if (l1) {
        while (l1) {
            result.push(l1.val);
            l1 = l1.next;
        }
    } else {
        while (l2) {
            result.push(l2.val);
            l2 = l2.next;
        }
    }
    return result;
};