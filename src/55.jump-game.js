/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxLength = 0
  let currentMax = 0

  /**
   * `(PMD) position max distance`: means the max distance that current position can reach, it equals `currentIdx + currentNumber`
   *
   * 1. Calculate current PMD
   * 2. Compare current PMD with previous PMD
   * 3. If previous PMD greater than current position index,
   *    then means it can reach to current position,
   *    other wise, it can't reach to current position.
   */
  for (let idx = 0; idx < nums.length; idx++) {
    const num = nums[idx]

    if (maxLength <= idx && num === 0) {
      return idx === nums.length - 1
    }

    currentMax = idx + num

    maxLength = Math.max(maxLength, currentMax)
  }

  return true
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(canJump(...args), expect, String(args))
test([[2, 3, 1, 1, 4]], true)
test([[3, 2, 1, 0, 4]], false)
test([[0]], true)
test([[2, 0, 0]], true)
