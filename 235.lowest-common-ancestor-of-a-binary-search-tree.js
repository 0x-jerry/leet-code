/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = root

  while (node) {
    if (node.val > p.val && node.val > q.val) {
      node = node.left
    } else if (node.val < p.val && node.val < q.val) {
      node = node.right
    } else {
      return node
    }
  }

  return -1
}
// @lc code=end
global.debug = true

const assert = require('assert')

let t1 = tree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
assert.equal(lowestCommonAncestor(t1, getNode(t1, 2), getNode(t1, 8)), getNode(t1, 6))

assert.equal(lowestCommonAncestor(t1, getNode(t1, 2), getNode(t1, 4)), getNode(t1, 2))

function getNode(tree, val) {
  const visit = (node, cb) => {
    if (node.left) {
      visit(node.left, cb)
    }
    if (cb(node)) return
    if (node.right) {
      visit(node.right, cb)
    }
  }

  let node
  visit(tree, (n) => {
    if (n.val === val) node = n
  })

  return node
}

function Node(val) {
  return {
    val,
    left: null,
    right: null
  }
}

function isNumber(n) {
  return typeof n === 'number'
}

function tree(arr) {
  if (!arr.length) {
    return
  }

  const root = Node(arr.shift())

  const nodeQueue = [root]

  while (arr.length) {
    const node = nodeQueue.shift()

    let val = arr.shift()

    if (isNumber(val)) {
      nodeQueue.push((node.left = Node(val)))
    }

    val = arr.shift()
    if (isNumber(val)) {
      nodeQueue.push((node.right = Node(val)))
    }
  }

  return root
}
