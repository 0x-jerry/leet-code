/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0

  const trave = (node, parent) => {
    if (!node) {
      return
    }

    if (node.left) {
      trave(node.left, node)
    }

    if (node.right) {
      trave(node.right, node)
    }

    if (!node.left && !node.right && parent && parent.left === node) {
      sum += node.val
    }
  }

  trave(root)

  return sum
}
// @lc code=end
