/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = []

  let maxIndex = -1
  let max = -Infinity

  for (let idx = k; idx <= nums.length; idx++) {
    if (nums[idx - 1] <= max && maxIndex >= idx - k) {
      if (nums[idx - 1] === max) {
        maxIndex = idx - 1
      }
    } else {
      for (let subIdx = idx - k; subIdx < idx; subIdx++) {
        const n = nums[subIdx]
        if (subIdx == idx - k) {
          max = n
          maxIndex = subIdx
        } else if (max <= n) {
          max = n
          maxIndex = subIdx
        }
      }
    }

    result.push(max)
  }

  return result
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(maxSlidingWindow(...args), expect, String(args))
test([[1, 3, -1, -3, 5, 3, 6, 7], 3], [3, 3, 5, 5, 6, 7])
test([[1, -1], 1], [1, -1])
test([[9, 10, 9, -7, -4, -8, 2, -6], 5], [10, 10, 9, 2])
test(
  [[-6, -10, -7, -1, -9, 9, -8, -4, 10, -5, 2, 9, 0, -7, 7, 4, -2, -10, 8, 7], 7],
  [9, 9, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 8, 8]
)
