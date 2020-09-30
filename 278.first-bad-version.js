/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let max = n + 1
    let min = 0
    let middle = ~~(max / 2)

    while (true) {
      const isBad = isBadVersion(middle)
      const isBadPrev = isBadVersion(middle - 1)

      if (isBad && !isBadPrev) {
        return middle
      }

      if (isBad) {
        max = middle
      } else {
        min = middle
      }

      middle = ~~((min + max) / 2)
    }
  }
}
// @lc code=end

const assert = require('assert')
assert.strictEqual(solution((n) => n >= 4)(5), 4)
assert.strictEqual(solution((n) => n >= 1)(1), 1)
assert.strictEqual(solution((n) => n >= 2)(2), 2)
assert.strictEqual(solution((n) => n >= 1)(3), 1)
