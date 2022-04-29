/*
 * @lc app=leetcode id=1022 lang=typescript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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

function sumRootToLeaf(root: TreeNode | null): number {
  if (!root) return 0

  let sum = 0

  const traverse = (node: TreeNode, binaryNumber = '') => {
    if (node.left) traverse(node.left, binaryNumber + node.val)

    if (node.right) traverse(node.right, binaryNumber + node.val)

    if (!node.left && !node.right) {
      sum += parseInt(binaryNumber + node.val, 2)
    }
  }

  traverse(root)

  return sum
}
// @lc code=end

describe('sum root to leaf', () => {
  it('root = [1,0,1,0,1,0,1]', () => {
    expect(sumRootToLeaf(buildBinaryTree([1, 0, 1, 0, 1, 0, 1]))).toBe(22)
  })

  it('root = [0]', () => {
    expect(sumRootToLeaf(buildBinaryTree([0]))).toBe(0)
  })
})
