/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let maxLen = Math.max(num1.length, num2.length)
  let up = 0
  let r = []

  for (let idx = 0; idx < maxLen; idx++) {
    const a = +num1[num1.length - 1 - idx] || 0
    const b = +num2[num2.length - 1 - idx] || 0
    const sum = a + b + up
    up = 0
    if (sum >= 10) {
      up = 1
      r[maxLen - idx] = sum % 10
    } else {
      r[maxLen - idx] = sum
    }
  }

  if (up) {
    r[0] = 1
    up = 0
  }

  return r.join('')
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(addStrings(...args), expect, String(args))
test(['0', '0'], '0')
test(['1', '9'], '10')
test(['9', '99'], '108')
