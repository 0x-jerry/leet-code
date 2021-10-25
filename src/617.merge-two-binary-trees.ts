/*
 * @lc app=leetcode id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  const merge = (node1: TreeNode, node2: TreeNode): TreeNode | null => {
    if (!node1 && !node2) return null

    if (!node1) return node2
    if (!node2) return node1

    const left = merge(node1.left, node2.left)
    const right = merge(node1.right, node2.right)

    return {
      val: node1.val + node2.val,
      left,
      right,
    }
  }

  return merge(root1, root2)
}
// @lc code=end

describe('merge trees', () => {
  test('root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]', () => {
    expect(mergeTrees(buildBinaryTree([1, 3, 2, 5]), buildBinaryTree([2, 1, 3, null, 4, null, 7]))).toEqual(
      buildBinaryTree([3, 4, 5, 5, 4, null, 7])
    )
  })

  test('root1 = [1], root2 = [1,2]', () => {
    expect(mergeTrees(buildBinaryTree([1]), buildBinaryTree([1, 2]))).toEqual(buildBinaryTree([2, 2]))
  })
})
