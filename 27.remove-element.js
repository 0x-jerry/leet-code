/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length;) {
    const n = nums[i]

    if (n === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }

  return nums.length
}
