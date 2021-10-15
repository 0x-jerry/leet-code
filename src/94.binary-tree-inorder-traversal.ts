/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 */

import { createNode as n } from '../utils/tree'

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

function inorderTraversal(root: TreeNode | null): number[] {
  const output: number[] = []

  const visit = (node: TreeNode) => {
    if (node.left) visit(node.left)
    output.push(node.val)
    if (node.right) visit(node.right)
  }

  if (!root) return output

  visit(root)

  return output
}
// @lc code=end

test('[1,null,2,3]', () => {
  const tree = n(1, null, n(2, n(3)))

  expect(inorderTraversal(tree)).toEqual([1, 3, 2])
})

test('[]', () => {
  expect(inorderTraversal(null)).toEqual([])
})

test('[1]', () => {
  const tree = n(1)

  expect(inorderTraversal(tree)).toEqual([1])
})

test('[1, 2]', () => {
  const tree = n(1, n(2))

  expect(inorderTraversal(tree)).toEqual([2, 1])
})

test('[2, 1]', () => {
  const tree = n(1, null, n(2))

  expect(inorderTraversal(tree)).toEqual([1, 2])
})
