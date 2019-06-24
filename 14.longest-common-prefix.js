/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0
  let prefix = ''

  if (strs.length === 0) {
    return prefix
  }

  const minLen = Math.min(...strs.map((s) => s.length))

  while (i < minLen) {
    if (hasTheSameChar(strs, i)) {
      prefix += strs[0][i]
      i++
    } else {
      break
    }
  }

  return prefix
}

/**
 * @param {string[]} strs
 * @param {number} i
 * @returns {boolean}
 */
function hasTheSameChar (strs, i) {
  let prefix = ''

  for (const s of strs) {
    const c = s[i]
    if (prefix === '') {
      prefix = c
    } else if (prefix !== c) {
      return false
    }
  }

  return true
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
