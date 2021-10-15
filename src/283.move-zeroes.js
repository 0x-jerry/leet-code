/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let maxLen = nums.length
  let idx = 0
  while (idx < maxLen) {
    const val = nums[idx]

    if (val === 0) {
      nums.push(...nums.splice(idx, 1))
      maxLen--
    } else {
      idx++
    }
  }

  return nums
}
// @lc code=end

const assert = require('assert')
assert.deepStrictEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
