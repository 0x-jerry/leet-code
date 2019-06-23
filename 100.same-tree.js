/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p && q) {
    if (p.val !== q.val) {
      return false
    }

    const sameLeft = isSameTree(p.left, q.left)
    const sameRight = isSameTree(p.right, q.right)

    return sameLeft && sameRight
  } else if (!p && !q) {
    return true
  } else {
    return false
  }
}
