/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  p = mergeStar(p)
  return isMatchRaw(s, p)
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatchRaw(s, p) {
  if (!s) {
    return !p || p === '*'
  }

  if (!p) {
    return false
  }

  const pattern = getNextPattern(p)

  if (pattern === '?') {
    return isMatchRaw(s.slice(1), p.slice(1))
  }

  if (pattern === '*') {
    return isMatchRaw(s.slice(1), p) || isMatchRaw(s, p.slice(1))
  }

  const currentStr = s.slice(0, pattern.length)
  if (pattern !== currentStr) {
    return false
  }

  return isMatchRaw(s.slice(currentStr.length), p.slice(pattern.length))
}

/**
 *
 * @param {string} p
 * @returns
 */
function getNextPattern(p) {
  let pattern = ''

  for (const s of p) {
    if (s === '*' || s === '?') {
      break
    } else {
      pattern += s
    }
  }

  return pattern || p[0]
}

/**
 *
 * @param {string} p
 * @returns
 */
function mergeStar(p) {
  return p.replace(/\*+/g, '*')
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(isMatch(...args), expect, String(args))
test(['aa', 'a'], false)
test(['aa', '*'], true)
test(['cb', '?a'], false)
test(['adceb', '*a*b'], true)
test(['acdcb', 'a*c?b'], false)
test(['', '*****'], true)
test(
  [
    'aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba',
    '*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*',
  ],
  true
)

test(
  [
    'abbaabbbbababaababababbabbbaaaabbbbaaabbbabaabbbbbabbbbabbabbaaabaaaabbbbbbaaabbabbbbababbbaaabbabbabb',
    '***b**a*a*b***b*a*b*bbb**baa*bba**b**bb***b*a*aab*a**',
  ],
  true
)

test(
  [
    'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
    '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb',
  ],
  false
)
