/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @typedef TreeNode
 * @property {any} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return []

  const values = []
  let level = 0

  traversalTree(
    root,
    (node, level) => {
      const orderList = values[level]

      if (orderList) {
        orderList.push(node.val)
      } else {
        values[level] = [node.val]
      }
    },
    level
  )

  return values.reverse()
}

/**
 *
 * @param {TreeNode} root
 * @param {(node:TreeNode, level:number) => any} func
 * @param {number} level
 */
function traversalTree (root, func, level) {
  if (!root) {
    return
  }

  func(root, level)
  const nextLevel = level + 1

  if (root.left) {
    traversalTree(root.left, func, nextLevel)
  }

  if (root.right) {
    traversalTree(root.right, func, nextLevel)
  }
}
