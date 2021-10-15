/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  const rangeQueue = []

  /**
   * @param {[number, number]} rangeA
   * @param {[number, number]} rangeB
   * @returns {[number,number][]}
   */
  const combineRange = (rangeA, rangeB) => {
    const rangeAStart = rangeA[0]
    const rangeAEnd = rangeA[1]
    const rangeBStart = rangeB[0]

    const rangeBEnd = rangeB[1]

    if (rangeAEnd >= rangeBStart) {
      rangeA[1] = rangeBEnd

      return [[rangeAStart, Math.max(rangeAEnd, rangeBEnd)]]
    } else {
      return [rangeA, rangeB]
    }
  }

  for (const range of intervals) {
    if (rangeQueue.length === 0) {
      rangeQueue.push(range)
    } else {
      rangeQueue.push(...combineRange(rangeQueue.pop(), range))
    }
  }

  return rangeQueue
}
// @lc code=end

const asesrt = require('assert')

asesrt.deepEqual(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18]
  ]
)

asesrt.deepEqual(
  merge([
    [1, 4],
    [4, 5]
  ]),
  [[1, 5]]
)
