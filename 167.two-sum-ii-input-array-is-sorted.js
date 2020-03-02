/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const len = numbers.length

  const calcSum = (n, start) => {
    for (let i = start; i < numbers.length; i++) {
      const m = numbers[i]
      if (n + m === target) return i
    }

    return -1
  }

  for (let i = 0; i < len; i++) {
    const j = calcSum(numbers[i], i + 1)
    if (j >= 0) return [i + 1, j + 1]
  }
}

// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9))
