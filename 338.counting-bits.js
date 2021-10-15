/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = []

  for (let idx = 0; idx <= n; idx++) {
    const n = count1(idx)

    ans.push(n)
  }

  return ans
}

function count1(n) {
  let c = 0

  while (n) {
    n &= n - 1
    c++
  }

  return c
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(countBits(...args), expect, String(args))

test([2], [0, 1, 1])
test([5], [0, 1, 1, 2, 1, 2])
