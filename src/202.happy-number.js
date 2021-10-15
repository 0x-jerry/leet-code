/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = 0

  while (n > 0) {
    sum += (n % 10) ** 2

    n = ~~(n / 10)

    if (n === 0) {
      if (sum >= 10) {
        n = sum
        sum = 0
      } else if (sum === 1 || sum == 7) {
        return true
      } else {
        return false
      }
    }
  }

  return false
}
// @lc code=end

const assert = require('assert')

assert.equal(isHappy(19), true)
assert.equal(isHappy(2), false)
