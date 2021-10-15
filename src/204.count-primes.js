/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 2) {
    return false
  }

  const primes = Array(n).fill(true)
  primes[0] = false
  primes[1] = false

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false
      }
    }
  }

  return primes.filter((n) => !!n).length
}
// @lc code=end

const assert = require('assert')

assert.equal(countPrimes(10), 4)

console.time('count')
assert.equal(countPrimes(499979), 41537)
console.timeEnd('count')
