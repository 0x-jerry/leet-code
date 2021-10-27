/*
 * @lc app=leetcode id=700 lang=typescript
 *
 * [700] Search in a Binary Search Tree
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let n = null
  const visit = (node: TreeNode) => {
    if (!node) return
    if (n) return

    if (node.val === val) {
      n = node
      return
    }

    if (node.val > val) visit(node.left)
    else if (node.val < val) visit(node.right)
  }

  visit(root)
  return n
}
// @lc code=end

describe('search BST', () => {
  test('root = [4,2,7,1,3], val = 2', () => {
    expect(searchBST(buildBinaryTree([4, 2, 7, 1, 3]), 2)).toEqual(buildBinaryTree([2, 1, 3]))
  })

  test('root = [4,2,7,1,3], val = 5', () => {
    expect(searchBST(buildBinaryTree([4, 2, 7, 1, 3]), 5)).toEqual(buildBinaryTree([]))
  })
})
