/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n < 4 ? true : n % 4 !== 0
}
// @lc code=end

const assert = require('assert')
assert.strictEqual(canWinNim(2), true, 2)
assert.strictEqual(canWinNim(3), true, 3)
assert.strictEqual(canWinNim(4), false, 4)
assert.strictEqual(canWinNim(5), true, 5)
assert.strictEqual(canWinNim(6), true, 6)
assert.strictEqual(canWinNim(7), true, 7)
assert.strictEqual(canWinNim(8), false, 8)
