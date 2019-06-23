/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let mid = Math.round((left + right) / 2)

  while (true) {
    const pow = mid * mid

    if (pow === x) {
      return mid
    } else if (pow > x) {
      right = mid
    } else {
      left = mid
    }

    const m = Math.round((right + left) / 2)
    if (m === mid) {
      return pow > x ? mid - 1 : mid
    } else {
      mid = m
    }
  }
}
