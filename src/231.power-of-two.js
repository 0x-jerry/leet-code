/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  const map = {
    0: false,
    1: true
  }
  if (map[n] !== undefined) {
    return map[n]
  }

  while (n > 1) {
    n = n / 2
    if (n !== ~~n) {
      return false
    }
  }

  return n === 1
}
// @lc code=end

const assert = require('assert')

assert.equal(isPowerOfTwo(1), true)
assert.equal(isPowerOfTwo(16), true)
assert.equal(isPowerOfTwo(218), false)
assert.equal(isPowerOfTwo(0), false)
assert.equal(isPowerOfTwo(-16), false)
