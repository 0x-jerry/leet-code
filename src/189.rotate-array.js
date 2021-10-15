/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const len = nums.length

  const swap = (nums, i, j) => {
    const t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
  }

  const getRotateIdx = (n) => (n + k) % len

  let idxStart = 0
  let preIdx = idxStart

  for (let i = 0; i < len - 1; i++) {
    let idx = getRotateIdx(preIdx)

    if (idx === idxStart) {
      preIdx = ++idxStart
      continue
    }

    swap(nums, idxStart, idx)
    preIdx = idx
  }

  return nums
}

// @lc code=end

const assert = require('assert')

assert.deepEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
assert.deepEqual(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])
assert.deepEqual(rotate([1, 2, 3, 4, 5, 6], 2), [5, 6, 1, 2, 3, 4])
