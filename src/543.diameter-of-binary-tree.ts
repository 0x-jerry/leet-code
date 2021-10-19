/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

interface NodeInfo {
  level: number
  node: TreeNode
  parent: NodeInfo
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  const leafs: NodeInfo[] = []
  let maxLevel = 0

  const visit = (node: TreeNode, parent: NodeInfo | null = null) => {
    const info: NodeInfo = {
      level: parent ? parent.level + 1 : 0,
      node,
      parent,
    }

    maxLevel = Math.max(maxLevel, info.level)

    if (!node.left && !node.right) {
      leafs.push(info)
    }

    if (node.left) visit(node.left, info)
    if (node.right) visit(node.right, info)
  }

  visit(root)

  let max = 0

  for (let i = 0; i < leafs.length - 1; i++) {
    const nodeA = leafs[i]

    for (let j = i + 1; j < leafs.length; j++) {
      const nodeB = leafs[j]
      max = Math.max(max, diameter(nodeA, nodeB))
      // console.log(nodeA.node.val, nodeB.node.val, max)
    }
  }

  return Math.max(max, maxLevel)
}

function diameter(a: NodeInfo, b: NodeInfo) {
  let x = 0

  while (a) {
    let p = b

    let y = 0

    while (p) {
      if (p.node === a.node) {
        return x + y
      }

      p = p.parent
      y++
    }

    x++
    a = a.parent
  }

  return 0
}
// @lc code=end

describe('diameter of binary tree', () => {
  test('[1,2,3,4,5]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1, 2, 3, 4, 5]))).toBe(3)
  })

  test('[1,2]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1, 2]))).toBe(1)
  })

  test('[1]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([1]))).toBe(0)
  })

  test('[2,1,4,3,null,5]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 1, 4, 3, null, 5]))).toBe(4)
  })

  test('[2,3,null,1]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 3, null, 1]))).toBe(2)
  })

  test('[2,5,null,3,null,1,4]', () => {
    expect(diameterOfBinaryTree(buildBinaryTree([2, 5, null, 3, null, 1, 4]))).toBe(3)
  })
})
