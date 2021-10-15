/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const maxN = 3
  const maximum = new Array(maxN).fill(-Infinity)

  nums.forEach((n) => {
    for (let i = 0; i < maxN; i++) {
      if (n === maximum[i]) {
        return
      }

      if (n > maximum[i]) {
        for (let idx = maxN - 1; idx >= i; idx--) {
          if (idx === i) {
            maximum[idx] = n
          } else {
            maximum[idx] = maximum[idx - 1]
          }
        }
        return
      }
    }
  })

  return maximum[2] === -Infinity ? maximum[0] : maximum[2]
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(thirdMax(...args), expect, String(args))
test([[3, 2, 1]], 1)
test([[1, 2]], 2)
test([[2, 2, 3, 1]], 1)
test([[1, 2, 2, 5, 3, 5]], 2)
test([[1, 2, -2147483648]], -2147483648)
