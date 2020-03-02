/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let resultNode = new ListNode(0)
  const root = resultNode

  let gt10 = 0
  while (l1 && l2) {
    const val = l1.val + l2.val + gt10

    gt10 = val >= 10 ? 1 : 0

    resultNode.val = val >= 10 ? val % 10 : val
    l1 = l1.next
    l2 = l2.next
    if (l1 || l2) {
      const newNode = new ListNode(0)
      resultNode.next = newNode
      resultNode = newNode
    }
  }

  let l = l1 || l2

  while (l) {
    const val = l.val + gt10
    gt10 = val >= 10 ? 1 : 0

    resultNode.val = val >= 10 ? val % 10 : val
    l = l.next
    if (l) {
      const newNode = new ListNode(0)
      resultNode.next = newNode
      resultNode = newNode
    }
  }

  if (gt10) {
    resultNode.next = new ListNode(1)
  }

  return root
}

class ListNode {
  constructor(val) {
    this.val = val
    /**
     * @type {ListNode}
     */
    this.next = null
  }
}

// @lc code=end
