/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      map.delete(nums[i - (k + 1)])
    }

    const n = nums[i]

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

assert.equal(containsNearbyDuplicate([1, 2, 3, 1], 3), true)
assert.equal(containsNearbyDuplicate([1, 0, 1, 1], 1), true)
assert.equal(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false)
