/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @typedef TreeNode
 * @property {any} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return []
  }

  const all = []
  const queue = []

  queue.push({ node: root, path: String(root.val) })
  while (queue.length) {
    const top = queue.pop()

    if (top.node.left) {
      queue.push({
        node: top.node.left,
        path: top.path + '->' + top.node.left.val,
      })
    }

    if (top.node.right) {
      queue.push({
        node: top.node.right,
        path: top.path + '->' + top.node.right.val,
      })
    }

    if (!top.node.left && !top.node.right) {
      all.push(top.path)
    }
  }

  return all
}
// @lc code=end
console.log(
  binaryTreePaths({
    val: 1,
    left: {
      val: 2,
      right: {
        val: 5,
      },
    },
    right: {
      val: 3,
    },
  })
)
