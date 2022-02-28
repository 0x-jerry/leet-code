/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
 */

import { buildList } from '../utils/list'

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  const records: ListNode[] = []

  let node = head
  let idx = 0
  while (node) {
    records[idx++] = node
    node = node.next
  }

  const mid = Math.floor(idx / 2)
  return records[mid]
}
// @lc code=end

describe('middleNode', () => {
  it('head = [1,2,3,4,5]', () => {
    expect(middleNode(buildList([1, 2, 3, 4, 5]))).toEqual(buildList([3, 4, 5]))
  })

  it('head = [1,2,3,4,5,6]', () => {
    expect(middleNode(buildList([1, 2, 3, 4, 5, 6]))).toEqual(buildList([4, 5, 6]))
  })
})
