/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true
  }

  const leftDepth = maxDepth(root.left)

  const rightDepth = maxDepth(root.right)

  const balanced = Math.abs(leftDepth - rightDepth) <= 1

  if (!balanced) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
}

/**
 *
 * @param {TreeNode} root
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}
