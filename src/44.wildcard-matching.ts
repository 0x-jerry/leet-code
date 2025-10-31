/*
 * @lc app=leetcode id=44 lang=typescript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  p = p.replace(/\*+/g, '*')

  const lenP = p.length
  const lenS = s.length

  let i = 0
  let j = 0

  let backtraceStarPos = -1
  let matched = 0

  while (i < lenS) {
    if (j < lenP && (p[j] === '?' || s[i] === p[j])) {
      i++
      j++
    } else if (j < lenP && p[j] === '*') {
      backtraceStarPos = j
      matched = i

      j++
    } else if (backtraceStarPos !== -1) {
      j = backtraceStarPos + 1

      matched++
      i = matched
    } else {
      return false
    }
  }

  while (j < lenP && p[j] === '*') {
    j++
  }

  return j === lenP
}

// @lc code=end

describe('Wildcard Matching', () => {
  it('s = "aa", p = "a"', () => {
    expect(isMatch('aa', 'a')).toBe(false)
  })

  it('s = "hi", p = "*?"', () => {
    expect(isMatch('hi', '*?')).toBe(true)
  })

  it('s = "aa", p = "aa"', () => {
    expect(isMatch('aa', 'aa')).toBe(true)
  })

  it('s = "aa", p = "*"', () => {
    expect(isMatch('aa', '*')).toBe(true)
  })

  it('s = "cb", p = "?a"', () => {
    expect(isMatch('cb', '?a')).toBe(false)
  })

  it('s = "b", p = "*?*?"', () => {
    expect(isMatch('b', '*?*?')).toBe(false)
  })

  it('s = "adceb", p = "*a*b"', () => {
    expect(isMatch('adceb', '*a*b')).toBe(true)
  })

  it('s = "acdcb", p = "a*c?b"', () => {
    expect(isMatch('acdcb', 'a*c?b')).toBe(false)
  })

  it('s = "abcabczzzde", p = "*abc???de*"', () => {
    expect(isMatch('abcabczzzde', '*abc???de*')).toBe(true)
  })

  it('s = "", p = "******"', () => {
    expect(isMatch('', '******')).toBe(true)
  })

  it('time limited', () => {
    expect(
      isMatch(
        'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
        '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb',
      ),
    ).toBe(false)
  })
})
