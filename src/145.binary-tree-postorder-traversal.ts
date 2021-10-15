/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
  const output = []

  const visit = (node: TreeNode) => {
    if (!node) return

    if (node.left) visit(node.left)
    if (node.right) visit(node.right)

    output.push(node.val)
  }

  visit(root)
  return output
}
// @lc code=end

describe('reorder traversal', () => {
  test('[1,null,2,3]', () => {
    expect(postorderTraversal(buildBinaryTree([1, null, 2, null, null, 3]))).toEqual([3, 2, 1])
  })
})
