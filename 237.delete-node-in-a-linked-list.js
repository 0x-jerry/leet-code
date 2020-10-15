/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if (node) {
    const next = node.next
    node.val = next.val
    node.next = next && next.next
  }
}
// @lc code=end

const assert = require('assert')

const list = List([4, 5, 1, 9])
deleteNode(getNode(list, 5))

assert.deepEqual(toArray(list), [4, 1, 9])

function Node(val) {
  return {
    val,
    next: null
  }
}

function List(arr) {
  if (!arr.length) {
    return
  }

  let head
  let root

  for (const item of arr) {
    const node = Node(item)
    if (!root) {
      root = node
      head = node
    } else {
      head.next = node
      head = head.next
    }
  }

  return root
}

function getNode(head, val) {
  while (head) {
    if (head.val === val) {
      return head
    }
    head = head.next
  }
}

function toArray(head) {
  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  return arr
}
