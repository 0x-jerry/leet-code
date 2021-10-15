/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }

  let root = null

  let nextReverseNode = head.next

  while (nextReverseNode) {
    const nextNode = head.next

    head.next = root
    root = head
    nextReverseNode = nextNode
    head = nextReverseNode
  }

  return root
}
// @lc code=end

const assert = require('assert')

assert.deepEqual(toArray(reverseList(toNodeList([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1])
assert.deepEqual(toArray(reverseList(toNodeList([1]))), [1])

function toArray(node) {
  if (!node) {
    return []
  }

  const values = [node.val]
  node = node.next

  while (node) {
    values.push(node.val)
    node = node.next
  }

  return values
}

function toNodeList(arr, recursive = false) {
  if (arr.length === 0) {
    return null
  }

  let head = {}
  const root = head

  let pre = head
  arr.forEach((val) => {
    head.val = val
    pre = head

    head.next = {}
    head = head.next
  })

  if (pre.next.val === undefined) {
    delete pre.next
  }

  if (recursive) {
    pre.next = head
  }

  return root
}
