/*
 * @lc app=leetcode id=783 lang=typescript
 *
 * [783] Minimum Distance Between BST Nodes
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

function minDiffInBST(root: TreeNode | null): number {
  let pre: number | null = null
  let min = Infinity

  const visit = (node: TreeNode) => {
    node.left && visit(node.left)
    if (pre === null) {
      pre = node.val
    } else {
      min = Math.min(min, node.val - pre)
      pre = node.val
    }
    node.right && visit(node.right)
  }

  visit(root)

  return min
}
// @lc code=end

describe('min diff in BST', () => {
  test('root = [4,2,6,1,3]', () => {
    expect(minDiffInBST(buildBinaryTree([4, 2, 6, 1, 3]))).toBe(1)
  })

  test('root = [1,0,48,null,null,12,49]', () => {
    expect(minDiffInBST(buildBinaryTree([1, 0, 48, null, null, 12, 49]))).toBe(1)
  })
})
