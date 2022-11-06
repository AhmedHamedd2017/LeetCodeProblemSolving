/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    if(!head.next){
        if(head.val === val) return head.next;
        return head;
    }
    
    const removed = removeElements(head.next,val);
    if(head.val === val) return removed;
        
    head.next = removed;
    return head;
};