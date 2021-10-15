/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = []
  const len = nums.length

  const getMaxMoney = (idx) => {
    if (idx >= len) {
      return 0
    }

    if (dp[idx] === undefined) {
      const sum = nums[idx] + getMaxMoney(idx + 2)
      const sumPre = getMaxMoney(idx + 1)

      dp[idx] = Math.max(sum, sumPre)
    }

    return dp[idx]
  }

  return getMaxMoney(0)
}
// @lc code=end

const assert = require('assert')

assert.equal(rob([1, 2, 3, 1]), 4)
assert.equal(rob([2, 7, 9, 3, 1]), 12)
assert.equal(rob([2, 1, 1, 2]), 4)
