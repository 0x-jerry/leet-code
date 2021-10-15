/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
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
  const root = {
    val: 'root',
    next: head
  }

  let preNode = root

  while (head) {
    if (head.val === val) {
      preNode.next = head.next
    } else {
      preNode = head
    }

    head = head.next
  }

  return root.next
}
// @lc code=end
