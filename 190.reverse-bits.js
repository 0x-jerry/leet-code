/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const radix2 = n.toString(2).padStart(32, '0')

  const reversed = radix2
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed, 2)
}
// @lc code=end

const assert = require('assert')

assert.equal(reverseBits(0b00000010100101000001111010011100), 0b00111001011110000010100101000000)
assert.equal(reverseBits(0b11111111111111111111111111111101), 0b10111111111111111111111111111111)
