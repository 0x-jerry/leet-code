/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let copies = 2; copies <= s.length; copies++) {
    const len = s.length / copies

    if (!Number.isInteger(len)) {
      continue
    }

    if (testPattern(s, copies, len)) {
      return true
    }
  }

  return false
}

function testPattern(s, copies, copyLen) {
  const firstS = s.slice(0, copyLen)

  for (let idx = 2; idx <= copies; idx++) {
    const currS = s.slice(copyLen * (idx - 1), copyLen * idx)
    if (currS !== firstS) {
      return false
    }
  }

  return true
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(repeatedSubstringPattern(...args), expect, String(args))
test(['abab'], true)
test(['aba'], false)
test(['abcabcabcabc'], true)
test(['bb'], true)
