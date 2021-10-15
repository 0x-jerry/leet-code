/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let zeros = 0

  while (n >= 5) {
    zeros += ~~(n / 5)
    n = n / 5
  }

  return zeros
}
// @lc code=end

const assert = require('assert')

assert.equal(trailingZeroes(3), 0)
assert.equal(trailingZeroes(5), 1)
assert.equal(trailingZeroes(30), 7)
assert.equal(trailingZeroes(625), 156)
assert.equal(trailingZeroes(3125), 781)
