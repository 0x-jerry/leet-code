/*
 * @lc app=leetcode id=589 lang=typescript
 *
 * [589] N-ary Tree Preorder Traversal
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

function preorder(root: Node | null): number[] {
  let r: number[] = []

  if (!root) return r

  const visit = (node: Node) => {
    r.push(node.val)
    for (const n of node.children) {
      visit(n)
    }
  }

  visit(root)

  return r
}
// @lc code=end

describe('preorder', () => {
  test('root = [1,null,3,2,4,null,5,6]', () => {
    expect(preorder(buildNaryTree([1, null, 3, 2, 4, null, 5, 6]))).toEqual([1, 3, 5, 6, 2, 4])
  })

  test('root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () => {
    expect(
      preorder(
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
    ).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10])
  })
})
