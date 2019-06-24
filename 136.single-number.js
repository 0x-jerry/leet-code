/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * XOR operator can solve this problem
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {}

  nums.forEach(n => {
    if (map[n]) {
      delete map[n]
    } else {
      map[n] = true
    }
  })

  return Object.keys(map)[0]
}
