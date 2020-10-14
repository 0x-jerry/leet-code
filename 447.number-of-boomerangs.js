/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    let lens = new Map()

    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue
      }

      const len = distance(points[i], points[j])
      const count = lens.get(len) || 0
      lens.set(len, count + 1)
    }
    for (const val of lens.values()) {
      if (val > 1) {
        result += val * (val - 1)
      }
    }
  }

  return result

  function distance(p1, p2) {
    return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(numberOfBoomerangs(...args), expect, String(args))
test(
  [
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  ],
  2
)

test(
  [
    [
      [0, 0],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
  ],
  20
)
