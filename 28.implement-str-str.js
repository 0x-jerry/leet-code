/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len = needle.length
  for (let i = 0; i < haystack.length; i++) {
    const str = haystack.substr(i, len)
    if (str === needle) {
      return i
    }
  }

  return haystack === needle ? 0 : -1
}
