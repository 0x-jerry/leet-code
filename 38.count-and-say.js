/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }

  let lastSay = countAndSay(n - 1)

  let say = ''

  let char = lastSay[0]
  let count = 1

  for (let i = 1; i < lastSay.length; i++) {
    const c = lastSay[i]
    if (char === c) {
      count++
    } else {
      say += count + char
      char = c
      count = 1
    }
  }

  say += count + char

  return say
}
