/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length

  let ten = 0
  digits[len - 1]++

  for (let i = len - 1; i >= 0; i--) {
    if (ten === 1) {
      digits[i]++
      ten = 0
    }

    if (digits[i] === 10) {
      digits[i] = 0
      ten = 1
    } else {
      return digits
    }
  }

  if (ten === 1) {
    digits.unshift(1)
    return digits
  }
}
