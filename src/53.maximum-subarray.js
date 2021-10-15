/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * solution 1
 *
 * Calculate every subarray max sum value and return the max one
 * F(n) = Fsum(n) - Fminsum(n-1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0
  let minSum = 0
  let maxSub = -Infinity

  nums.forEach((n) => {
    minSum = Math.min(minSum, sum)

    sum += n

    maxSub = Math.max(maxSub, sum - minSum)
  })

  return maxSub
}

/**
 * solution 0
 *
 * Abandon the subarray which sum <= 0
 *
 * @param {number[]} nums
 */
const solution0 = function (nums) {
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
