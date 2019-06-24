/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  } else if (nums.length === 1) {
    return new Node(nums[0])
  } else {
    const mid = ~~(nums.length / 2)
    const node = new Node(nums[mid])

    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid + 1))

    return node
  }
}

class Node {
  constructor (val, leftChild = null, rightChild = null) {
    this.val = val
    this.left = leftChild
    this.right = rightChild
  }
}
