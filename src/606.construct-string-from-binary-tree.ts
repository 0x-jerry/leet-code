/*
 * @lc app=leetcode id=606 lang=typescript
 *
 * [606] Construct String from Binary Tree
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

function tree2str(root: TreeNode | null): string {
  const visit = (node: TreeNode) => {
    if (!node) return ''

    const ls = visit(node.left)
    const rs = visit(node.right)

    const v = String(node.val)
    if (rs) {
      return v + '(' + ls + ')(' + rs + ')'
    } else if (ls) {
      return v + '(' + ls + ')'
    } else {
      return v
    }
  }

  return visit(root)
}
// @lc code=end

describe('tree 2 str', () => {
  test('root = [1,2,3,4]', () => {
    expect(tree2str(buildBinaryTree([1, 2, 3, 4]))).toBe('1(2(4))(3)')
  })

  test('root = [1,2,3,null,4]', () => {
    expect(tree2str(buildBinaryTree([1, 2, 3, null, 4]))).toBe('1(2()(4))(3)')
  })

  test('root = [1]', () => {
    expect(tree2str(buildBinaryTree([1]))).toBe('1')
  })
})
