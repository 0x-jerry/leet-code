/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * 剩余的数字 +1 相当于 当前的数字 -1
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  const min = Math.min(...nums)

  let total = 0
  nums.forEach((n) => {
    total += n - min
  })

  return total
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(minMoves(...args), expect, String(args))
test([[1, 2, 3]], 3)
