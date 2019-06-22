/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  const len = s.length

  let result = 0
  for (let i = len - 1; i >= 0; i--) {
    const c = s[i]
    if (c === ' ') {
      return result
    } else {
      result ++
    }
  }

  return result
}

