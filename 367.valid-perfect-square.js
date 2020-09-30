/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let i = 0

  while (true) {
    const pow = i * i
    if (pow === num) {
      return true
    } else if (pow > num) {
      return false
    }
    i++
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(isPerfectSquare(...args), expect, String(args))
test([16], true)
test([14], false)
test([1], true)
test([5], false)
