/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const arrS = []

  const getSameIdxs = (idx, str) => {
    let idxs = [idx]

    const c = str[idx]

    for (let i = idx + 1; i < str.length; i++) {
      if (c === str[i]) {
        idxs.push(i)
      }
    }

    return idxs
  }

  const checkIdxsWeatherTheSame = (idx) => {
    const idxsS = getSameIdxs(idx, s)
    const idxsT = getSameIdxs(idx, t)
    if (idxsS.length !== idxsT.length) {
      return false
    }

    for (let i = 0; i < idxsS.length; i++) {
      arrS[i] = 1
      if (idxsS[i] !== idxsT[i]) {
        return false
      }
    }

    return true
  }

  for (let i = 0; i < s.length; i++) {
    if (arrS[i]) {
      continue
    }

    if (!checkIdxsWeatherTheSame(i)) {
      return false
    }
  }

  return true
}
// @lc code=end

const assert = require('assert')

assert.equal(isIsomorphic('egg', 'add'), true)
assert.equal(isIsomorphic('foo', 'bar'), false)
assert.equal(isIsomorphic('paper', 'title'), true)
assert.equal(isIsomorphic('ab', 'aa'), false)
