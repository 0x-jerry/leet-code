/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let splitN = s.length

  do {
    for (let idx = 0; idx <= s.length - splitN; idx++) {
      const subStr = s.slice(idx, idx + splitN)
      if (isPalindrome(subStr)) {
        return subStr
      }
    }
  } while (--splitN > 1)

  return s[0]
}

/**
 *
 * @param {string} str
 * @returns {string | false}
 */

function isPalindrome(str) {
  const mid = (0 + str.length) / 2
  const start = 0
  const end = str.length - 1

  let result = true

  for (let idx = 0; idx < mid; idx++) {
    if (str[start + idx] !== str[end - idx]) {
      result = false
      break
    }
  }

  return result
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(longestPalindrome(...args), expect, String(args))
test(['babad'], 'bab')
test(['cbbd'], 'bb')
test(['a'], 'a')
test(['ac'], 'a')
test(['eabcb'], 'bcb')
test(['babaddtattarrattatddetartrateedredividerb'], 'ddtattarrattatdd')
