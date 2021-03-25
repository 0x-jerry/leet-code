/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start

/**
 *
 * @typedef Range
 * @property {number} lIdx
 * @property {number} rIdx
 *
 * @param {number} lIdx
 * @param {number} rIdx
 * @returns {Range}
 */
function StrRange(lIdx, rIdx) {
  return {
    lIdx,
    rIdx,
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /**
   * @type {Range[]}
   */
  const queue = []

  queue.push(StrRange(0, s.length))

  const isPalindrome = createIsPalindrome()

  while (queue.length) {
    const range = queue.shift()
    if (isPalindrome(s, range)) {
      return s.slice(range.lIdx, range.rIdx)
    }

    const ls = StrRange(range.lIdx, range.rIdx - 1)
    const rs = StrRange(range.lIdx + 1, range.rIdx)
    queue.push(ls)
    queue.push(rs)
  }
}

function createIsPalindrome() {
  const cache = new Map()
  /**
   *
   * @param {string} str
   * @param {Range} range
   * @returns {string | false}
   */
  return (str, range) => {
    // const cacheKey = `${range.lIdx}-${range.rIdx}`
    // if (cache.has(cacheKey)) {
    //   return cache.get(cacheKey)
    // }

    const mid = (range.rIdx - range.lIdx) / 2
    const start = range.lIdx
    const end = range.rIdx - 1

    let result = true

    for (let idx = 0; idx < mid; idx++) {
      if (str[start + idx] !== str[end - idx]) {
        result = false
        break
      }
    }

    // cache.set(cacheKey, result)

    return result
  }
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
