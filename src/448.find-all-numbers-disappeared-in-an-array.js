/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const buckets = new Array(nums.length + 1).fill(false)
  nums.forEach((idx) => (buckets[idx] = true))

  const result = []
  buckets.forEach((val, idx) => {
    idx > 0 && !val && result.push(idx)
  })

  return result
}
// @lc code=end
const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(findDisappearedNumbers(...args), expect, String(args))
test([[4, 3, 2, 7, 8, 2, 3, 1]], [5, 6])
