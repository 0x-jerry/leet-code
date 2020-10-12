/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIdx = 0
  let sChar = s[sIdx]

  if (!s) {
    return true
  }

  for (let idx = 0; idx < t.length; idx++) {
    const tChar = t[idx]
    if (tChar === sChar) {
      sChar = s[++sIdx]
      if (sIdx === s.length) {
        return true
      }
    }
  }

  return false
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(isSubsequence(...args), expect, String(args))
test(['abc', 'ahbgdc'], true)
test(['axc', 'ahbgdc'], false)
