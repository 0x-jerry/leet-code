/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sCounter = countChar(s)
  const tCounter = countChar(t)

  for (const key of tCounter.keys()) {
    const sCollection = sCounter.get(key)
    const tCollection = tCounter.get(key)

    if (!sCollection || sCollection.count + 1 === tCollection.count) {
      return key
    }
  }

  function countChar(str) {
    const counter = new Map()

    str.split('').forEach((c, idx) => {
      const collection = counter.get(c)
      if (collection) {
        collection.count++
      } else {
        counter.set(c, {
          char: c,
          idx,
          count: 1,
        })
      }
    })

    return counter
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(findTheDifference(...args), expect, String(args))
test(['abcd', 'abcde'], 'e')
test(['', 'y'], 'y')
test(['a', 'aa'], 'a')
test(['ae', 'aea'], 'a')
