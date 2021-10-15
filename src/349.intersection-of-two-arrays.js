/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)

  const intersections = []
  s1.forEach((val) => {
    if (s2.has(val)) {
      intersections.push(val)
    }
  })

  return intersections
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(intersection(...args), expect, String(args))
test(
  [
    [1, 2, 2, 1],
    [2, 2],
  ],
  [2]
)
test(
  [
    [4, 9, 5],
    [9, 4, 9, 8, 4],
  ],
  [4, 9]
)
