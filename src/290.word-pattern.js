/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const letters = pattern.split('')
  const words = s.split(' ')

  if (letters.length !== words.length) {
    return false
  }

  const letterPattern = new Map()
  const wordPattern = new Map()

  for (let idx = 0; idx < letters.length; idx++) {
    const letter = letters[idx]
    const word = words[idx]

    const l = letterPattern.get(letter) || ''
    const w = wordPattern.get(word) || ''

    if (l !== w) {
      return false
    }

    letterPattern.set(letter, l + idx)
    wordPattern.set(word, w + idx)
  }

  return true
}
// @lc code=end

const assert = require('assert')
assert.strictEqual(wordPattern('abba', 'dog cat cat dog'), true, 1)
assert.strictEqual(wordPattern('abba', 'dog cat cat fish'), false, 2)
assert.strictEqual(wordPattern('aaaa', 'dog cat cat dog'), false, 3)
assert.strictEqual(wordPattern('abba', 'dog dog dog dog'), false, 4)
