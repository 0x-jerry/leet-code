/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null): number {
  let minimal = Infinity

  let preVal = -1

  const visit = (node: TreeNode) => {
    if (node.left) visit(node.left)

    if (preVal >= 0) {
      minimal = Math.min(minimal, node.val - preVal)
    }

    preVal = node.val

    if (node.right) visit(node.right)
  }

  visit(root)

  return minimal
}
// @lc code=end

describe('get minimum difference', () => {
  test('[4,2,6,1,3]', () => {
    expect(getMinimumDifference(buildBinaryTree([4, 2, 6, 1, 3]))).toBe(1)
  })

  test('[1,0,48,null,null,12,49]', () => {
    expect(getMinimumDifference(buildBinaryTree([1, 0, 48, null, null, 12, 49]))).toBe(1)
  })

  test('[236,104,701,null,227,null,911]', () => {
    expect(getMinimumDifference(buildBinaryTree([236, 104, 701, null, 227, null, 911]))).toBe(9)
  })

  test('[0,null,2236,1277,2776,519]', () => {
    expect(getMinimumDifference(buildBinaryTree([0, null, 2236, 1277, 2776, 519]))).toBe(519)
  })
})
