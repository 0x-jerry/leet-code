/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let weight = 0

  while (n !== 0) {
    if (n % 2 !== 0) {
      weight++
    }

    n = n >>> 1
  }

  return weight
}
// @lc code=end

const assert = require('assert')
assert.equal(hammingWeight(0b00000000000000000000000000001011), 3)
assert.equal(hammingWeight(0b00000000000000000000000010000000), 1)
assert.equal(hammingWeight(0b11111111111111111111111111111101), 31)
