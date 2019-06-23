/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const maxLen = Math.max(a.length, b.length)
  if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b
  } else {
    a = '0'.repeat(b.length - a.length) + a
  }

  const sum = new Array(maxLen).fill(0)
  let ten = 0

  for (let i = maxLen - 1; i >= 0; i--) {
    const m = +(a[i] || 0)
    const n = +(b[i] || 0)
    let aSum = ten + m + n

    if (aSum >= 2) {
      ten = 1
      sum[i] = aSum - 2
    } else {
      ten = 0
      sum[i] = aSum
    }
  }

  return (ten === 1 ? '1' : '') + sum.join('')
}
