/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */
/**
 * Definition for singly-linked list.
 * @typedef ListNode
 * @property {*} val
 * @property {ListNode | null} next
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} h
 * @return {ListNode}
 */
var deleteDuplicates = function(h) {
  const head = h

  let node = head
  let nextNode = null

  while (node && node.next) {
    nextNode = node.next

    if (nextNode.val === node.val) {
      node.next = nextNode.next
    } else {
      node = node.next
    }
  }

  return head
}
