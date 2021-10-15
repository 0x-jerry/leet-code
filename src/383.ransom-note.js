/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const c1 = new Map()
  const c2 = new Map()

  const collect = (s, collection) => {
    s.split('').forEach((key) => {
      collection.set(key, (collection.get(key) || 0) + 1)
    })
  }

  collect(ransomNote, c1)
  collect(magazine, c2)

  for (const key of c1.keys()) {
    const count1 = c1.get(key) || 0
    const count2 = c2.get(key) || 0
    if (count1 > count2) {
      return false
    }
  }

  return true
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(canConstruct(...args), expect, String(args))
test(['a', 'b'], false)
test(['aa', 'ab'], false)
test(['ab', 'aab'], true)
