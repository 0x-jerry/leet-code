/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const collectionChar = (s) => {
    const collection = new Map()

    for (const c of s) {
      const count = collection.get(c) || 0
      collection.set(c, count + 1)
    }

    return collection
  }

  const isTheSameCollection = (a, b) => {
    if (a.size !== b.size) {
      return false
    }

    for (const k of a.keys()) {
      if (a.get(k) !== b.get(k)) {
        return false
      }
    }

    return true
  }

  return isTheSameCollection(collectionChar(s), collectionChar(t))
}
// @lc code=end

const assert = require('assert')

assert.equal(isAnagram('anagram', 'nagaram'), true)
assert.equal(isAnagram('rat', 'car'), false)
