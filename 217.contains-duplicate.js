/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Set()

  for (const n of nums) {
    if (map.has(n)) {
      return true
    } else {
      map.add(n)
    }
  }
  return false
}
// @lc code=end

const assert = require('assert')

assert.equal(containsDuplicate([1, 2, 3, 1]), true)
assert.equal(containsDuplicate([1, 2, 3, 4]), false)
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
