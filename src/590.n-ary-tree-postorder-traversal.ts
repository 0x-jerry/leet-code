/*
 * @lc app=leetcode id=590 lang=typescript
 *
 * [590] N-ary Tree Postorder Traversal
 */

import { buildNaryTree } from '../utils/tree'

interface Node<T = any> {
  val: T
  children: Node[]
}

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
  let r: number[] = []

  if (!root) return r

  const visit = (node: Node) => {
    for (const n of node.children) {
      visit(n)
    }
    r.push(node.val)
  }

  visit(root)

  return r
}
// @lc code=end

describe('preorder', () => {
  test('root = [1,null,3,2,4,null,5,6]', () => {
    expect(postorder(buildNaryTree([1, null, 3, 2, 4, null, 5, 6]))).toEqual([5, 6, 3, 2, 4, 1])
  })

  test('root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () => {
    expect(
      postorder(
        buildNaryTree([
          1,
          null,
          2,
          3,
          4,
          5,
          null,
          null,
          6,
          7,
          null,
          8,
          null,
          9,
          10,
          null,
          null,
          11,
          null,
          12,
          null,
          13,
          null,
          null,
          14,
        ])
      )
    ).toEqual([2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1])
  })
})
