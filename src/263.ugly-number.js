/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  const primes = [5, 3, 2]
  let next = num

  while (true) {
    next = num

    for (const n of primes) {
      if (next % n === 0) {
        next /= n
      }
    }

    if (next === num) {
      break
    } else {
      num = next
    }
  }

  return primes.includes(num) || num === 1
}
// @lc code=end

const assert = require('assert')
assert(isUgly(6) === true)
assert(isUgly(8) === true)
assert(isUgly(14) === false)
assert(isUgly(25) === true)
