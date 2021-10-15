/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @typedef Bucket
 * @property {number} left
 * @property {number} leftIdx
 * @property {number} right
 * @property {number} rightIdx
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const lastIdx = height.length - 1

  const bucket = {
    left: height[0],
    leftIdx: 0,
    right: height[lastIdx],
    rightIdx: lastIdx,
  }

  return calcRainCount(bucket, height)
}

/**
 *
 * @param {Bucket} bucket
 * @param {number[]} height
 */
function calcRainCount(bucket, height) {
  let rainCount = 0
  if (Math.abs(bucket.leftIdx - bucket.rightIdx) <= 1) {
    return rainCount
  }

  // move dir: <---------
  if (bucket.left > bucket.right) {
    let idx = bucket.rightIdx - 1
    while (idx >= bucket.leftIdx) {
      const currentH = height[idx]
      if (currentH >= bucket.right) {
        bucket.right = currentH
        bucket.rightIdx = idx
        break
      } else {
        const c = bucket.right - currentH
        if (c > 0) {
          rainCount += c
        }
      }

      idx--
    }
  } else {
    // move dir: -------->
    let idx = bucket.leftIdx + 1
    while (idx <= bucket.rightIdx) {
      const currentH = height[idx]
      if (currentH >= bucket.left) {
        bucket.left = currentH
        bucket.leftIdx = idx
        break
      } else {
        const c = bucket.left - currentH
        if (c > 0) {
          rainCount += c
        }
      }

      idx++
    }
  }

  return rainCount + calcRainCount(bucket, height)
}

// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(trap(...args), expect, String(args))
test([[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], 6)
test([[4, 2, 0, 3, 2, 5]], 9)
