/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longestLen = 0
  let subStr = ''
  s.split('').forEach((c) => {
    const repeatIndex = subStr.indexOf(c)
    if (repeatIndex < 0) {
      subStr += c
    } else {
      if (longestLen < subStr.length) {
        longestLen = subStr.length
      }
      subStr = subStr.substr(repeatIndex + 1) + c
    }

  })

  return subStr.length > longestLen ? subStr.length : longestLen
}

