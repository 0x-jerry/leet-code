/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const isTheSameTree = (node: TreeNode, node1: TreeNode) => {
    let theSame = node.val === node1.val

    if (node.left && node1.left) {
      theSame &&= isTheSameTree(node.left, node1.left)
    } else {
      theSame &&= !node.left && !node1.left
    }

    if (node.right && node1.right) {
      theSame &&= isTheSameTree(node.right, node1.right)
    } else {
      theSame &&= !node.right && !node1.right
    }

    return theSame
  }

  let hasSubTree = false
  const visit = (node: TreeNode) => {
    if (hasSubTree) {
      return
    }

    if (node.val === subRoot.val) {
      if (isTheSameTree(node, subRoot)) {
        hasSubTree = true
        return
      }
    }

    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
  }

  visit(root)

  return hasSubTree
}

// @lc code=end

describe('is subtree', () => {
  test('root = [3,4,5,1,2], subRoot = [4,1,2]', () => {
    expect(isSubtree(buildBinaryTree([3, 4, 5, 1, 2]), buildBinaryTree([4, 1, 2]))).toBe(true)
  })

  test('root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]', () => {
    expect(isSubtree(buildBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]), buildBinaryTree([4, 1, 2]))).toBe(
      false
    )
  })

  test('root = [3,4,5,1,2], subRoot = [4,1,2,1]', () => {
    expect(isSubtree(buildBinaryTree([3, 4, 5, 1, 2]), buildBinaryTree([4, 1, 2, 1]))).toBe(false)
  })
})
