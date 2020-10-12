/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const r = []
  for (let idx = 1; idx <= n; idx++) {
    let c = ''
    c += idx % 3 === 0 ? 'Fizz' : ''
    c += idx % 5 === 0 ? 'Buzz' : ''

    c += c ? '' : idx

    r.push(c)
  }

  return r
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(fizzBuzz(...args), expect, String(args))
test([15], ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
