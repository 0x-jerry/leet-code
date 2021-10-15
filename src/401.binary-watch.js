/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
const hours = [1, 2, 4, 8]
const minutes = [1, 2, 4, 8, 16, 32]
const values = [...hours, ...minutes]

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const r = calcTimes(values.length, num)
    .map((time) => toTimeStr(time))
    .filter((time) => {
      const [h, m] = time.split(':')
      return +h < 12 && +m < 60
    })

  return r

  function toTimeStr(time) {
    let h = 0
    let m = 0
    for (const t of time) {
      if (t < hours.length) {
        h += values[t]
      } else {
        m += values[t]
      }
    }
    return `${h}:${m.toString().padStart(2, 0)}`
  }

  function nextComb(comb, n, k) {
    // 最后一位
    let i = k - 1
    // e + i 表示 当前位 最大值
    const e = n - k

    do comb[i]++
    while (comb[i] > e + i && i--)

    if (comb[0] > e) return 0

    while (++i < k) comb[i] = comb[i - 1] + 1

    return 1
  }

  function calcTimes(n, k) {
    if (n < k || k <= 0) return [[]]

    const comb = []
    const allTimes = []

    for (let i = 0; i < k; i++) comb[i] = i

    do allTimes.push([...comb])
    while (nextComb(comb, n, k))

    return allTimes
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.deepStrictEqual(sort(readBinaryWatch(...args)), sort(expect), String(args))
test([1], ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32'])
test([0], ['0:00'])

function sort(arr) {
  return arr.sort((a, b) => a - b)
}
