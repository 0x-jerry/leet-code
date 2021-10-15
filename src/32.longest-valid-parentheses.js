/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var longestValidParentheses = function (str) {
  const chars = str.split('')

  /**
   * 1. Set all index of valid parentheses to 1
   */
  for (let idx = 0; idx < chars.length; idx++) {
    const char = chars[idx]

    if (char === ')') {
      const leftBucketIdx = findNearestLeftBucket(chars, idx - 1)
      if (leftBucketIdx !== false) {
        chars[leftBucketIdx] = 1
        chars[idx] = 1
      }
    }
  }

  /**
   * 2. Find the longest continue sub sequence that only contain 1
   */
  let max = 0
  let current = 0

  for (const char of chars) {
    if (char === 1) {
      current++
    } else {
      max = Math.max(current, max)
      current = 0
    }
  }

  return Math.max(max, current)
}

function findNearestLeftBucket(chars, idx) {
  while (idx > -1) {
    if (chars[idx] === '(') {
      return idx
    }
    idx--
  }

  return false
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(longestValidParentheses(...args), expect, String(args))
test(['(()'], 2)
test([')()())'], 4)
test(['()(()'], 2)
