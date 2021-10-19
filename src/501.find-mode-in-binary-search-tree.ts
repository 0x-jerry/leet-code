/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
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

function findMode(root: TreeNode | null): number[] {
  if (!root) return []

  const counter: Record<string, number> = {}

  const visit = (node: TreeNode) => {
    if (node.left) visit(node.left)

    if (node.right) visit(node.right)
    counter[node.val] = (counter[node.val] || 0) + 1
  }
  visit(root)

  const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1])

  const first = sorted[0][1]

  return sorted.filter((s) => s[1] === first).map((n) => parseInt(n[0]))
}
// @lc code=end

describe('find mode', () => {
  test('[1,null,2,2]', () => {
    expect(findMode(buildBinaryTree([1, null, 2, 2]))).toEqual([2])
  })

  test('[0]', () => {
    expect(findMode(buildBinaryTree([0]))).toEqual([0])
  })
})
