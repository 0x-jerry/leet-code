/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  let count = 0

  for (let i = 0; i < g.length && count < s.length; i++) {
    if (g[i] <= s[count]) count++
  }

  return count
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(findContentChildren(...args), expect, String(args))
test(
  [
    [1, 2, 3],
    [1, 1],
  ],
  1
)
test(
  [
    [1, 2],
    [1, 2, 3],
  ],
  2
)
