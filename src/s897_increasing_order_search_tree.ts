/*
 * @lc app=leetcode id=897 lang=typescript
 *
 * [897] Increasing Order Search Tree
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  let aRoot: TreeNode | null = null

  let p = aRoot

  const visit = (node: TreeNode) => {
    if (node.left) {
      visit(node.left)
    }

    if (!aRoot) {
      p = aRoot = {
        left: null,
        right: null,
        val: node.val,
      }
    } else {
      p.right = {
        left: null,
        right: null,
        val: node.val,
      }

      p = p.right
    }

    if (node.right) {
      visit(node.right)
    }
  }

  visit(root)

  return aRoot
}
// @lc code=end

describe('increasing BST', () => {
  it('root = [5,3,6,2,4,null,8,1,null,null,null,7,9]', () => {
    expect(increasingBST(buildBinaryTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]))).toEqual(
      buildBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9])
    )
  })

  it('root = [5,1,7]', () => {
    expect(increasingBST(buildBinaryTree([5, 1, 7]))).toEqual(buildBinaryTree([1, null, 5, null, 7]))
  })
})
