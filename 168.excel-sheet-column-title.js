/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const charCodeStart = 64

  const unit = 26

  let chars = []

  while (n >= 1) {
    let cur = n % unit
    let rest = ~~(n / unit)

    if (n >= unit && cur === 0) {
      rest = rest - 1
      cur = unit
    }

    chars.unshift(n > unit ? cur : n)
    n = rest
  }

  return chars.map((n) => String.fromCharCode(charCodeStart + n)).join('')
}

// @lc code=end

const assert = require('assert')
assert.equal(convertToTitle(52), 'AZ')
assert.equal(convertToTitle(53), 'BA')
assert.equal(convertToTitle(1), 'A')
assert.equal(convertToTitle(29), 'AC')
assert.equal(convertToTitle(703), 'AAA')
assert.equal(convertToTitle(26), 'Z')
