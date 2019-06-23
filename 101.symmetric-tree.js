/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * @typedef TreeNode
 * @property {any} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return root ? isSymmetricTree(root.left, root.right) : true
}

/**
 * 
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 */
function isSymmetricTree(p, q) {
  if (p && q) {
    if (p.val !== q.val) {
      return false
    }

    const sameLeft = isSymmetricTree(p.left, q.right)
    const sameRight = isSymmetricTree(p.right, q.left)

    return sameLeft && sameRight
  } else if (!p && !q) {
    return true
  } else {
    return false
  }
}
