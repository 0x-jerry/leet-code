/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }

  let min = Infinity

  traversalTree(root, 1, (node, depth) => {
    if (!node.left && !node.right) {
      min = Math.min(min, depth)
    }
  })

  return min
}

/**
 *
 * @param {TreeNode} root
 * @param {number} depth
 * @param {(node:TreeNode, level:number) => any} func
 */
function traversalTree(root, depth, func) {
  if (!root) {
    return
  }

  func(root, depth)
  const nextDepth = depth + 1

  if (root.left) {
    traversalTree(root.left, nextDepth, func)
  }

  if (root.right) {
    traversalTree(root.right, nextDepth, func)
  }
}
