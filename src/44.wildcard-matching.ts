/*
 * @lc app=leetcode id=44 lang=typescript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const patten = _normalize(p)

  const _cache: (boolean | undefined)[][] = Array.from({ length: s.length + 1 }, () =>
    new Array(patten.length + 1).fill(undefined),
  )

  if (!s && patten.length === 1 && patten[0] === '*') {
    return true
  }

  return _isMatch(0, 0)

  function setCache(i: number, p: number, v: boolean) {
    _cache[i][p] = v
  }

  function getCache(i: number, p: number) {
    return _cache[i][p]
  }

  function _isMatch(strStartIdx: number, pIdx: number): boolean {
    if (strStartIdx >= s.length && pIdx >= patten.length) {
      return true
    }

    if (strStartIdx >= s.length) {
      return patten.slice(pIdx).every((x) => x === '*')
    }

    if (pIdx >= patten.length) {
      return false
    }

    const result = getCache(strStartIdx, pIdx)
    if (result != null) {
      return result
    }

    const pChars = patten[pIdx]

    if (pChars === '*') {
      let count = 0

      let chars = ''

      while (pIdx < patten.length - 1) {
        //
        pIdx++
        if (patten[pIdx] === '?') {
          count++
        } else if (patten[pIdx] !== '*') {
          chars = patten[pIdx]
          break
        }
      }

      if (chars === '') {
        return s.slice(strStartIdx).length >= count
      }

      let matched = false
      const charsLen = chars.length

      while (strStartIdx < s.length) {
        if (chars === s.slice(strStartIdx, strStartIdx + charsLen)) {
          if (count <= 0) {
            matched = _isMatch(strStartIdx, pIdx)

            setCache(strStartIdx, pIdx, matched)

            if (matched) {
              return matched
            }
          }
        }

        count--
        strStartIdx++
      }

      return false
    } else if (pChars === '?') {
      const result = _isMatch(strStartIdx + 1, pIdx + 1)
      setCache(strStartIdx + 1, pIdx + 1, result)

      return result
    } else {
      const chars = s.slice(strStartIdx, strStartIdx + pChars.length)

      if (pChars === chars) {
        const result = _isMatch(strStartIdx + pChars.length, pIdx + 1)

        setCache(strStartIdx + pChars.length, pIdx + 1, result)

        return result
      }
    }

    return false
  }

  function _normalize(p: string) {
    const patten: string[] = []

    let current = ''
    for (let i = 0; i < p.length; i++) {
      const char = p[i]

      if (char === '*') {
        if (current === '*') {
          continue
        } else if (current.length) {
          patten.push(current)
          current = ''
        }
        current = '*'
      } else if (char === '?') {
        if (current) {
          patten.push(current)
        }
        patten.push(char)
        current = ''
      } else {
        if (current === '*') {
          patten.push(current)
          current = ''
        }

        current += char
      }
    }

    if (current) {
      patten.push(current)
    }

    return patten
  }
}
// @lc code=end

describe('Wildcard Matching', () => {
  it('s = "aa", p = "a"', () => {
    expect(isMatch('aa', 'a')).toBe(false)
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
