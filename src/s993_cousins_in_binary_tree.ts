/*
 * @lc app=leetcode id=993 lang=typescript
 *
 * [993] Cousins in Binary Tree
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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false

  const find = {
    x: {
      node: null,
      parent: null,
      level: -1,
    },
    y: {
      node: null,
      parent: null,
      level: -1,
    },
  }

  const traverse = (node: TreeNode, level = 0, parent: TreeNode | null = null) => {
    if (node.val === x) {
      find.x.node = node
      find.x.parent = parent
      find.x.level = level
    }
    if (node.val === y) {
      find.y.node = node
      find.y.parent = parent
      find.y.level = level
    }

    if (find.x.node && find.y.node) return

    node.left && traverse(node.left, level + 1, node)
    node.right && traverse(node.right, level + 1, node)
  }

  traverse(root)

  return find.x.level === find.y.level && find.x.parent !== find.y.parent
}
// @lc code=end

describe('is cousins', () => {
  it('root = [1,2,3,4], x = 4, y = 3', () => {
    expect(isCousins(buildBinaryTree([1, 2, 3, 4]), 4, 3)).toBe(false)
  })

  it('root = [1,2,3,null,4,null,5], x = 5, y = 4', () => {
    expect(isCousins(buildBinaryTree([1, 2, 3, null, 4, null, 5]), 5, 4)).toBe(true)
  })

  it('root = [1,2,3,null,4], x = 2, y = 3', () => {
    expect(isCousins(buildBinaryTree([1, 2, 3, null, 4]), 2, 3)).toBe(false)
  })

  it('[1,2,3,null,null,4,5], x = 4, y = 5', () => {
    expect(isCousins(buildBinaryTree([1, 2, 3, null, null, 4, 5]), 4, 5)).toBe(false)
  })

  it('[1,2,4,3,19,10,5,15,8,null,null,13,14,null,6,null,17,null,null,null,null,18,null,7,11,null,null,null,null,null,9,16,12,null,null,20], x = 11, y = 17', () => {
    expect(
      isCousins(
        buildBinaryTree([
          1,
          2,
          4,
          3,
          19,
          10,
          5,
          15,
          8,
          null,
          null,
          13,
          14,
          null,
          6,
          null,
          17,
          null,
          null,
          null,
          null,
          18,
          null,
          7,
          11,
          null,
          null,
          null,
          null,
          null,
          9,
          16,
          12,
          null,
          null,
          20,
        ]),
        11,
        17
      )
    ).toBe(true)
  })
})
