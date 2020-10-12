/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const hexStr = '0123456789abcdef'
  const _toHex = (num) => {
    let c = ''
    let idx = num % 16

    if (num < 16) {
      return hexStr[num]
    }

    while (num >= 1) {
      idx = num % 16
      num = (num - idx) / 16

      c = hexStr[idx] + c
    }

    return c
  }

  return _toHex(num < 0 ? 2 ** 32 + num : num)
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(toHex(...args), expect, String(args))
test([26], '1a')
test([-1], 'ffffffff')
