/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }

  let result = false

  pathSum(root, 0, (pathSum) => {
    if (pathSum === sum) {
      result = true
    }
  })

  return result
}

/**
 *
 * @param {TreeNode} node
 * @param {number} sum
 * @param {(sum: number) => any} func
 */
function pathSum(node, sum, func) {
  const subTreeSum = sum + node.val

  if (!node.left && !node.right) {
    func(subTreeSum)
  }

  if (node.left) {
    pathSum(node.left, subTreeSum, func)
  }

  if (node.right) {
    pathSum(node.right, subTreeSum, func)
  }
}
