/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  const max = ~~Math.sqrt(n * 2)
  let idx = max

  const total = (i) => (i * (i + 1)) / 2
  do {
    if (total(idx) <= n) {
      return idx
    }
    idx--
  } while (idx)

  return idx
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(arrangeCoins(...args), expect, String(args))
test([5], 2)
test([8], 3)
