/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim()
  if (!s) {
    return 0
  }
  return s.split(/\s+/).length
}

// @lc code=end
const assert = require('assert')
const test = (args, expect) => assert.strictEqual(countSegments(...args), expect, String(args))
test(['Hello, my name is John'], 5)
test([''], 0)
