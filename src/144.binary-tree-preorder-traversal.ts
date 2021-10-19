/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
  const output = []

  const visit = (node: TreeNode) => {
    if (!node) return

    output.push(node.val)
    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
  }

  visit(root)
  return output
}
// @lc code=end

describe('reorder traversal', () => {
  test('[1,null,2,3]', () => {
    expect(preorderTraversal(buildBinaryTree([1, null, 2, 3]))).toEqual([1, 2, 3])
  })
})
