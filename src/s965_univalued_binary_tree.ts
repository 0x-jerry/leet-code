/*
 * @lc app=leetcode id=965 lang=typescript
 *
 * [965] Univalued Binary Tree
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

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return false

  const val = root.val

  const queue: TreeNode[] = [root]

  while (queue.length) {
    const node = queue.shift()
    if (node.val !== val) return false

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return true
}
// @lc code=end

describe('is uni-valued tree', () => {
  it('root = [1,1,1,1,1,null,1]', () => {
    expect(isUnivalTree(buildBinaryTree([1, 1, 1, 1, 1, null, 1]))).toBe(true)
  })

  it('root = [2,2,2,5,2]', () => {
    expect(isUnivalTree(buildBinaryTree([2, 2, 2, 5, 2]))).toBe(false)
  })
})
