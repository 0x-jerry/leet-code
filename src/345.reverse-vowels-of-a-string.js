/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const isVowel = /[aeiou]/i

  const r = []
  const vowelIdx = []
  s.split('').forEach((v, i) => {
    if (isVowel.test(v)) {
      vowelIdx.push(i)
    } else {
      r[i] = v
    }
  })

  vowelIdx.forEach((i1, idx) => {
    const i2 = vowelIdx[vowelIdx.length - 1 - idx]
    r[i1] = s[i2]
  })

  return r.join('')
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(reverseVowels(...args), expect, String(args))
test(['hello'], 'holle')
test(['leetcode'], 'leotcede')
