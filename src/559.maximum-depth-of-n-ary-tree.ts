/*
 * @lc app=leetcode id=559 lang=typescript
 *
 * [559] Maximum Depth of N-ary Tree
 */

import { buildNaryTree } from '../utils/tree'

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

interface Node {
  val: number
  children: Node[]
}

function maxDepth(root: Node | null): number {
  let max = 0

  if (!root) return max

  const visit = (node: Node, level = 1) => {
    max = Math.max(max, level)

    for (const n of node.children) {
      visit(n, level + 1)
    }
  }

  visit(root)

  return max
}
// @lc code=end

describe('maxDepth', () => {
  test('root = [1,null,3,2,4,null,5,6]', () => {
    expect(maxDepth(buildNaryTree([1, null, 3, 2, 4, null, 5, 6]))).toBe(3)
  })

  test('root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () => {
    expect(
      maxDepth(
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
    ).toBe(5)
  })
})
