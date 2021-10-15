/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const toArray = (node) => {
    const values = []
    while (node) {
      values.push(node.val)
      node = node.next
    }

    return values
  }

  const values = toArray(head)
  const len = values.length / 2

  for (let i = 0; i < len; i++) {
    const n = values[i]
    const m = values[values.length - 1 - i]
    if (n !== m) {
      return false
    }
  }

  return true
}
// @lc code=end

const assert = require('assert')

assert.equal(isPalindrome(toNodeList([1, 2])), false)
assert.equal(isPalindrome(toNodeList([1, 2, 2, 1])), true)

function toNodeList(arr) {
  if (!arr.length) {
    return null
  }

  const root = {}
  let head = root
  let pre = null

  for (const n of arr) {
    head.val = n
    head.next = {}
    pre = head
    head = head.next
  }

  delete pre.next

  return root
}
