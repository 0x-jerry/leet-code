/*
 * @lc app=leetcode id=671 lang=typescript
 *
 * [671] Second Minimum Node In a Binary Tree
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

function findSecondMinimumValue(root: TreeNode | null): number {
  let secondMin = root.val

  const visit = (node: TreeNode) => {
    if (node.val !== root.val) {
      if (secondMin === root.val) {
        secondMin = Math.max(secondMin, node.val)
      } else {
        secondMin = Math.min(secondMin, node.val)
      }
    }

    if (node.val > root.val) return

    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
  }

  visit(root)

  return secondMin === root.val ? -1 : secondMin
}
// @lc code=end

describe('find second minimum value', () => {
  test('root = [2,2,5,null,null,5,7]', () => {
    expect(findSecondMinimumValue(buildBinaryTree([2, 2, 5, null, null, 5, 7]))).toBe(5)
  })

  test('root = [2,2,2]', () => {
    expect(findSecondMinimumValue(buildBinaryTree([2, 2, 2]))).toBe(-1)
  })

  test('root = [2]', () => {
    expect(findSecondMinimumValue(buildBinaryTree([2]))).toBe(-1)
  })

  test('root = [5,5,6]', () => {
    expect(findSecondMinimumValue(buildBinaryTree([5, 5, 6]))).toBe(6)
  })

  test('root = [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]', () => {
    expect(
      findSecondMinimumValue(buildBinaryTree([1, 1, 3, 1, 1, 3, 4, 3, 1, 1, 1, 3, 8, 4, 8, 3, 3, 1, 6, 2, 1]))
    ).toBe(2)
  })
})
