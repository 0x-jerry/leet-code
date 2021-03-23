/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
const cache = {}
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m <= 1 || n <= 1) {
    return 1
  }

  const hit = cache[`${m}-${n}`] || cache[`${n}-${m}`]

  if (hit) {
    return hit
  }

  const val = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)

  cache[`${m}-${n}`] = val

  return val
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(uniquePaths(...args), expect, String(args))
test([3, 2], 3)
test([7, 3], 28)
test([3, 3], 6)
