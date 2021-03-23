/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
const fibMap = [0, 1, 1]
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const num = fibMap[n]

  if (num !== undefined) {
    return num
  }

  return fib(n - 1) + fib(n - 2)
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(fib(...args), expect, String(args))
test([2], 1)
test([3], 2)
test([4], 3)
