/*
 * @lc app=leetcode id=917 lang=typescript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  let r = ''

  const isChar = (c: string) => {
    const code = c.charCodeAt(0)
    return /* A */ (65 <= code && code <= /* Z */ 90) || /* a */ (97 <= code && code <= /* z */ 122)
  }

  let rawIdx = 0

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[s.length - 1 - idx]
    if (isChar(char)) {
      while (!isChar(s[rawIdx]) && rawIdx < s.length) {
        r += s[rawIdx]
        rawIdx++
      }
      rawIdx++

      r += char
    } else {
      // ignore
    }
  }

  while (rawIdx < s.length) {
    if (!isChar(s[rawIdx])) {
      r += s[rawIdx]
    }
    rawIdx++
  }

  return r
}
// @lc code=end

describe('reverse only letters', () => {
  it('s = "ab-cd"', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba')
  })

  it('s = "a-bC-dEf-ghIj"', () => {
    expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba')
  })

  it('s = "Test1ng-Leet=code-Q!"', () => {
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!')
  })
})
