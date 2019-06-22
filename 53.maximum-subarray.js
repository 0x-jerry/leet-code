/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = -Infinity

  let sum = 0
  nums.forEach((n) => {
    sum += n

    if (sum <= 0) {
      sum = 0
    } else if (result < sum) {
      result = sum
    }
  })

  return result === -Infinity ? Math.max(...nums) : result
}
