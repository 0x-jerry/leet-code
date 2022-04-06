/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0

  const visit = (node: TreeNode) => {
    if (low <= node.val && node.val <= high) {
      sum += node.val
    }

    if (node.val >= low) {
      if (node.left) {
        visit(node.left)
      }
    }

    if (node.val <= high) {
      if (node.right) {
        visit(node.right)
      }
    }
  }

  visit(root)

  return sum
}
// @lc code=end

describe('range sum BST', () => {
  it('root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10', () => {
    expect(rangeSumBST(buildBinaryTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)).toBe(23)
  })
})
