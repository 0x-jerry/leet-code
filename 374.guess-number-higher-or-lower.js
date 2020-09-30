/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let max = n + 1
  let min = 1
  let mid = ~~((max + min) / 2)

  while (true) {
    const r = guess(mid)
    if (r === 0) {
      return mid
    }

    if (r > 0) {
      min = mid
    } else {
      max = mid
    }

    mid = ~~((min + max) / 2)
  }
}
// @lc code=end

function guess(n) {
  const pick = 6
  return n === pick ? 0 : pick > n ? 1 : -1
}

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(guessNumber(...args), expect, String(args))
test([10], 6)
