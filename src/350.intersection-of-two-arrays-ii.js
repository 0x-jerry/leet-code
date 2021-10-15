/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const collect1 = new Map()
  const collect2 = new Map()

  nums1.forEach((n) => {
    collect1.set(n, (collect1.get(n) || 0) + 1)
  })

  nums2.forEach((n) => {
    collect2.set(n, (collect2.get(n) || 0) + 1)
  })

  function calcR(collect) {
    const r = []

    for (const key of collect.keys()) {
      const k1 = collect1.get(key)
      const k2 = collect2.get(key)
      if (k1 && k2) {
        r.push(...new Array(Math.min(k1, k2)).fill(key))
      }
    }

    return r
  }

  if (collect1.size < collect2.size) {
    return calcR(collect1)
  } else {
    return calcR(collect2)
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(intersect(...args), expect, String(args))
test(
  [
    [1, 2, 2, 1],
    [2, 2],
  ],
  [2, 2]
)

test(
  [
    [4, 9, 5],
    [9, 4, 9, 8, 4],
  ],
  [4, 9]
)
