/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const lenA = len(headA)
  const lenB = len(headB)
  let reduceLen = Math.abs(lenA - lenB)
  if (lenA > lenB) {
    for (let i = 0; i < reduceLen; i++) {
      headA = headA.next
    }
  } else {
    for (let i = 0; i < reduceLen; i++) {
      headB = headB.next
    }
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA
    }
    headA = headA.next
    headB = headB.next
  }

  return null
}

function len(head) {
  let l = 0

  while (head) {
    l++
    head = head.next
  }
  return l
}

// @lc code=end
