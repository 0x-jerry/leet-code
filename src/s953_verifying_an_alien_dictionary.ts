/*
 * @lc app=leetcode id=953 lang=typescript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz'

function isAlienSorted(words: string[], order: string): boolean {
  const orderMap: Record<string, string> = {}

  for (let idx = 0; idx < order.length; idx++) {
    const c = order[idx]
    orderMap[c] = alphabet[idx]
  }

  const converted: string[] = words.map(convert)

  for (let idx = 1; idx < converted.length; idx++) {
    const w1 = converted[idx - 1]
    const w2 = converted[idx]

    if (w1.localeCompare(w2) > 0) {
      return false
    }
  }

  return true

  function convert(s: string) {
    let r = ''
    for (const c of s) {
      r += orderMap[c]
    }

    return r
  }
}

// @lc code=end

describe('is alien sorted', () => {
  it('words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"', () => {
    expect(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')).toBe(true)
  })

  it('words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"', () => {
    expect(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')).toBe(false)
  })

  it('words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')).toBe(false)
  })
})
