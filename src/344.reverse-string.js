/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0
  let max = s.length - 1
  let c = s[i]

  for (let i = 0; i <= ~~(max / 2); i++) {
    if (i >= max - i) {
      break
    }
    c = s[max - i]
    s[max - i] = s[i]
    s[i] = c
  }

  return s
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(reverseString(...args), expect, String(args))
test([['h', 'e', 'l', 'l', 'o']], ['o', 'l', 'l', 'e', 'h'])
test([['H', 'a', 'n', 'n', 'a', 'h']], ['h', 'a', 'n', 'n', 'a', 'H'])
