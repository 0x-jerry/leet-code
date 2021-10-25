/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
  const levels: { sum: number; count: number }[] = []

  const visit = (node: TreeNode, level = 0) => {
    levels[level] ||= {
      sum: 0,
      count: 0,
    }

    levels[level].sum += node.val
    levels[level].count++

    if (node.left) visit(node.left, level + 1)
    if (node.right) visit(node.right, level + 1)
  }

  visit(root)

  return levels.map((n) => n.sum / n.count)
}
// @lc code=end

describe('average of levels', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    expect(averageOfLevels(buildBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual([3.0, 14.5, 11.0])
  })

  test('root = [3,9,20,15,7]', () => {
    expect(averageOfLevels(buildBinaryTree([3, 9, 20, 15, 7]))).toEqual([3.0, 14.5, 11.0])
  })
})
