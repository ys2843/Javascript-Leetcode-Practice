/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    var pre = head, cur = head.next;
    while (cur) {
        if (cur.val === pre.val) {
            pre.next = cur.next;
        } else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
};