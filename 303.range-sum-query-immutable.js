/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.caches = []
  let sum = 0
  nums.forEach((val, idx) => {
    sum += val
    this.caches[idx] = sum
  })
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.caches[j] - (this.caches[i - 1] || 0)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

const assert = require('assert')
const nums = [-2, 0, 3, -5, 2, -1]
const instance = new NumArray(nums)

assert.strictEqual(instance.sumRange(0, 2), 1)
assert.strictEqual(instance.sumRange(2, 5), -1)
assert.strictEqual(instance.sumRange(0, 5), -3)
