/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    var cur = head, nextNode = head.next;
    while (nextNode) {
        if (cur == nextNode) {
            return true;
        }
        cur = cur.next;
        if (!nextNode.next) {
            break;
        }
        nextNode=nextNode.next.next;
    }
    return false;
};