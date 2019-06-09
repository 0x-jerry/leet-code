/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isMinus = false
  if (x < 0) {
    isMinus = true
    x = -x
  }
  const reversed = x
    .toString()
    .split('')
    .reverse()
    .join('')
    .replace(/^0+/, '')

  if (+reversed > Math.pow(2, 31) - 1) {
    return 0
  }
  return isMinus ? -+reversed : +reversed
}
