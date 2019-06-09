/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @typedef ListNode
 * @property {any} val
 * @property {ListNode} next
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newList = null

  linkNode()

  const newListHead = newList

  function linkL1() {
    if (newList === null) {
      newList = l1
    } else {
      newList.next = l1
      newList = newList.next
    }
    l1 = l1.next
  }

  function linkL2() {
    if (newList === null) {
      newList = l2
    } else {
      newList.next = l2
      newList = newList.next
    }
    l2 = l2.next
  }

  function linkNode() {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        linkL1()
      } else {
        linkL2()
      }
    } else if (l1) {
      linkL1()
    } else if (l2) {
      linkL2()
    } else {
      return false
    }

    return true
  }

  while (true) {
    if (!linkNode()) {
      break
    }
  }

  return newListHead
}
