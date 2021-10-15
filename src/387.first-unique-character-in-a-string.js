/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counter = new Map()

  s.split('').forEach((c, idx) => {
    const collection = counter.get(c)
    if (collection) {
      collection.count++
    } else {
      counter.set(c, {
        char: c,
        idx,
        count: 1,
      })
    }
  })

  for (const key of counter.keys()) {
    const collection = counter.get(key)
    if (collection.count === 1) {
      return collection.idx
    }
  }

  return -1
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(firstUniqChar(...args), expect, String(args))
test(['leetcode'], 0)
test(['loveleetcode'], 2)
