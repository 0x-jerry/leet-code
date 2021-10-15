/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const invertChildren = (node) => {
    if (!node) {
      return
    }

    const t = node.left
    node.left = node.right
    node.right = t

    invertChildren(node.left)
    invertChildren(node.right)
  }

  invertChildren(root)

  return root
}
// @lc code=end
