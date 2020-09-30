/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const r = num % 9
  return r === 0 && num > 0 ? 9 : r
}
// @lc code=end
function addDigitsStandard(num) {
  while (true) {
    const total = calTotal(num)
    if (total < 10) {
      return total
    } else {
      num = total
    }
  }
}

function calTotal(num) {
  const digits = String(num)
    .split('')
    .map((n) => +n)

  const total = digits.reduce((pre, cur) => pre + cur, 0)

  return total
}

for (let index = 0; index < 101; index++) {
  const r = addDigitsStandard(index)

  const s = index % 9
  console.log(index, r, s === 0 && index > 0 ? 9 : s)
}
