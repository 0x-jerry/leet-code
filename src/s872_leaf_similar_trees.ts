/*
 * @lc app=leetcode id=872 lang=typescript
 *
 * [872] Leaf-Similar Trees
 */

import { buildBinaryTree } from '../utils/tree'

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const iterativePostOrder = function* (root: TreeNode, yieldFn: (node: TreeNode) => boolean) {
    const stack: TreeNode[] = []
    let lastVisitedNode: TreeNode | null = null
    let node: TreeNode | null = root

    while (stack.length || node) {
      if (node) {
        stack.push(node)
        node = node.left
      } else {
        const topNode = stack.at(-1)

        if (topNode.right && topNode.right !== lastVisitedNode) {
          node = topNode.right
        } else {
          if (yieldFn(topNode)) yield topNode.val

          lastVisitedNode = stack.pop()
        }
      }
    }
  }

  const i1 = iterativePostOrder(root1, (n) => !n.left && !n.right)
  const i2 = iterativePostOrder(root2, (n) => !n.left && !n.right)

  while (true) {
    const v1 = i1.next()
    const v2 = i2.next()

    if (v1.value !== v2.value) {
      return false
    }

    if (v1.done !== v2.done) {
      return false
    }

    if (v1.done) {
      return true
    }
  }

  return false
}
// @lc code=end

describe('leafSimilar', () => {
  it('root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]', () => {
    expect(
      leafSimilar(
        buildBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
        buildBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])
      )
    ).toBe(true)
  })

  it('root1 = [1,2,3], root2 = [1,3,2]', () => {
    expect(leafSimilar(buildBinaryTree([1, 2, 3]), buildBinaryTree([1, 3, 2]))).toBe(false)
  })
})
