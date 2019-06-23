/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 * 
 * Dynamic programing problem
 * 
 * f(n) = f(n - 1) + f(n - 2)
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n === 1 ? 1 : 2
  }

  let f1 = 1
  let f2 = 2
  let next = f1 + f2

  for (i = 3; i <= n; i++) {
    next = f1 + f2
    f1 = f2
    f2 = next
  }

  return next
}
