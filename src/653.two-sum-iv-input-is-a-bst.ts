/*
 * @lc app=leetcode id=653 lang=typescript
 *
 * [653] Two Sum IV - Input is a BST
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

function findTarget(root: TreeNode | null, k: number): boolean {
  let has = false

  const values = new Set<number>()

  const init = (node: TreeNode) => {
    values.add(node.val)
    if (node.left) init(node.left)
    if (node.right) init(node.right)
  }
  init(root)

  const hasValue = (node: TreeNode, v: number) => {
    return values.has(v)
  }

  const visit = (node: TreeNode) => {
    const target = k - node.val
    if (target !== node.val) {
      if (hasValue(root, target)) {
        has = true
        return
      }
    }

    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
  }

  visit(root)

  return has
}
// @lc code=end

describe('find target', () => {
  test('root = [5,3,6,2,4,null,7], k = 9', () => {
    expect(findTarget(buildBinaryTree([5, 3, 6, 2, 4, null, 7]), 9)).toBe(true)
  })

  test('root = [5,3,6,2,4,null,7], k = 28', () => {
    expect(findTarget(buildBinaryTree([5, 3, 6, 2, 4, null, 7]), 28)).toBe(false)
  })

  test('root = [2,1,3], k = 4', () => {
    expect(findTarget(buildBinaryTree([2, 1, 3]), 4)).toBe(true)
  })

  test('root = [2,1,3], k = 1', () => {
    expect(findTarget(buildBinaryTree([2, 1, 3]), 1)).toBe(false)
  })

  test('root = [2,1,3], k = 3', () => {
    expect(findTarget(buildBinaryTree([2, 1, 3]), 3)).toBe(true)
  })

  test('root = [1], k = 2', () => {
    expect(findTarget(buildBinaryTree([1]), 2)).toBe(false)
  })

  test('root = [1,0,4,-2,null,3], k = 7', () => {
    expect(findTarget(buildBinaryTree([1, 0, 4, -2, null, 3]), 7)).toBe(true)
  })
})
