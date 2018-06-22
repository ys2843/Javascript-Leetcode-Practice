/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var pre = new ListNode(-1);
    pre.next = head;
    var cur = head;
    var dumy = pre;
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
        } else {
            pre = pre.next
        }
        cur = cur.next;
    }
    return dumy.next;
};