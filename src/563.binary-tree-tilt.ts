/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
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

function findTilt(root: TreeNode | null): number {
  let sum = 0
  const visit = (node: TreeNode) => {
    if (!node) return 0

    const l = visit(node.left)
    const r = visit(node.right)

    const tilt = Math.abs(l - r)
    sum += tilt

    return l + r + node.val
  }

  visit(root)

  return sum
}
// @lc code=end

describe('find tilt', () => {
  test('root = [1,2,3]', () => {
    expect(findTilt(buildBinaryTree([1, 2, 3]))).toBe(1)
  })

  test('root = [4,2,9,3,5,null,7]', () => {
    expect(findTilt(buildBinaryTree([4, 2, 9, 3, 5, null, 7]))).toBe(15)
  })

  test('root = [21,7,14,1,1,2,2,3,3]', () => {
    expect(findTilt(buildBinaryTree([21, 7, 14, 1, 1, 2, 2, 3, 3]))).toBe(9)
  })
})
