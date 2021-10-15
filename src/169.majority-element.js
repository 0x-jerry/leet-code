/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const collection = {}

  const get = (n) => (collection[n] = collection[n] || 0)
  const plus = (n) => (collection[n] = get(n) + 1)
  const isMajority = (n) => get(n) > nums.length / 2

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    plus(n)

    if (isMajority(n)) {
      return n
    }
  }
}
// @lc code=end

const assert = require('assert')

assert.equal(majorityElement([3, 2, 3]), 3)
assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)
