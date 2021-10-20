/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  const visit = (node: TreeNode) => {
    if (!node) return 0
    const leftHeight = visit(node.left)
    const rightHeight = visit(node.right)

    max = Math.max(max, leftHeight + rightHeight)

    return Math.max(leftHeight, rightHeight) + 1
  }

  visit(root)

  return max
}

// @lc code=end

describe('diameter of binary tree', () => {
  test('[1,2,3,4,5]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1, 2, 3, 4, 5]))).toBe(3)
  })

  test('[1,2]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1, 2]))).toBe(1)
  })

  test('[1]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1]))).toBe(0)
  })

  test('[2,1,4,3,null,5]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 1, 4, 3, null, 5]))).toBe(4)
  })

  test('[2,3,null,1]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 3, null, 1]))).toBe(2)
  })

  test('[2,5,null,3,null,1,4]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 5, null, 3, null, 1, 4]))).toBe(3)
  })
})
