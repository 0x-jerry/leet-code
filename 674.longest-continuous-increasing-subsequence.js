/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let currentLen = 0
  let resultLen = 0
  let preVal = -Infinity

  nums.forEach((val) => {
    if (preVal < val) {
      currentLen++
    } else {
      resultLen = Math.max(currentLen, resultLen)
      currentLen = 1
    }

    preVal = val
  })

  return Math.max(currentLen, resultLen)
}
// @lc code=end

const assert = require('assert')

assert.equal(findLengthOfLCIS([1, 3, 5, 4, 7]), 3)
assert.equal(findLengthOfLCIS([2, 2, 2, 2]), 1)
assert.equal(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]), 4)
