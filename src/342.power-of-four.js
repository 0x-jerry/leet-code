/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  const map = [false, true, false, false]
  if (num < 4) {
    return map[num] || false
  }
  if (num % 4 !== 0) {
    return false
  }

  return isPowerOfFour(num / 4)
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(isPowerOfFour(...args), expect, String(args))
test([16], true)
test([5], false)
