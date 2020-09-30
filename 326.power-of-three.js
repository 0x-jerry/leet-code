/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const map = [false, true, false, true]
  if (n <= 3) {
    return map[n] || false
  }

  if (n % 3 !== 0) {
    return false
  }

  return isPowerOfThree(n / 3)
}
// @lc code=end

const assert = require('assert')

const test = (param, expect) => assert.strictEqual(isPowerOfThree(param), expect, param)

test(27, true)
test(0, false)
test(9, true)
test(45, false)
test(1, true)
test(-3, false)
test(6, false)
test(12, false)
test(144, false)
test(51, false)
test(57, false)
