/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = nums[0]

  for (let i = 1; i < nums.length;) {
    const n = nums[i]
    if (pre === n) {
      nums.splice(i, 1)
    } else {
      pre = n
      i++
    }
  }

  return nums.length
}
