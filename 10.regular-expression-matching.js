/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!s) {
    if (!p) {
      return true
    }

    // if `p` is like patten `a*b*c*` , return true,
    // other wise, return false.
    while (p.length >= 2) {
      const [_, patten] = p
      if (patten !== '*') {
        return false
      }
      p = p.slice(2)
    }

    return p.length === 0
  }

  const lastChar = s[s.length - 1]
  const patten = p[p.length - 1]
  let char = p[p.length - 2]

  if (patten === '*') {
    if (char === lastChar || char === '.') {
      // consume current char || not consume current char
      return isMatch(s.slice(0, -1), p) || isMatch(s, p.slice(0, -2))
    }

    return isMatch(s, p.slice(0, -2))
  }

  char = patten

  if (char === lastChar || char === '.') {
    return isMatch(s.slice(0, -1), p.slice(0, -1))
  }

  return false
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(isMatch(...args), expect, String(args))
test(['aa', 'a'], false)
test(['aa', 'a*'], true)
test(['ab', '.*'], true)
test(['aab', 'c*a*b'], true)
test(['mississippi', 'mis*is*p*'], false)
test(['aaa', 'a*a'], true)
test(['aaa', 'aaaa'], false)
test(['aaa', 'ab*a*c*a'], true)
test(['aasdfasdfasdfasdfas', 'aasdf.*asdf.*asdf.*asdf.*s'], true)
