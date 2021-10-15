/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const unit = 26

  const charToNum = (n) => n.charCodeAt(0) - 'A'.charCodeAt(0) + 1

  const chars = s.split('')

  const nums = chars.map((n, i) => charToNum(n) * Math.pow(unit, chars.length - 1 - i))

  return nums.reduce((pre, cur) => pre + cur, 0)
}

// @lc code=end

const assert = require('assert')

assert.equal(titleToNumber('A'), 1)
assert.equal(titleToNumber('AB'), 28)
assert.equal(titleToNumber('ZY'), 701)
