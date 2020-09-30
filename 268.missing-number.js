/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const line = []

  for (const n of nums) {
    line[n] = true
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (!line[i]) {
      return i
    }
  }
}
// @lc code=end
const assert = require('assert')

assert.strictEqual(missingNumber([3, 0, 1]), 2)
assert.strictEqual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
