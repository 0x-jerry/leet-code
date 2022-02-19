/*
 * @lc app=leetcode id=859 lang=typescript
 *
 * [859] Buddy Strings
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  const charCounter = new Map<string, number>()

  if (s.length !== goal.length) return false

  const differentCharIndex: number[] = []

  for (let idx = 0; idx < s.length; idx++) {
    const charS = s[idx]
    const charG = goal[idx]

    if (charS !== charG) {
      differentCharIndex.push(idx)
    }

    if (differentCharIndex.length > 2) return false

    if (charCounter.has(charS)) {
      charCounter.set(charS, charCounter.get(charS) + 1)
    } else {
      charCounter.set(charS, 1)
    }
  }

  if (differentCharIndex.length === 0) {
    for (const count of charCounter.values()) {
      if (count > 1) return true
    }

    return false
  }

  if (differentCharIndex.length !== 2) return false

  const [first, second] = differentCharIndex

  return s[first] === goal[second] && s[second] === goal[first]
}
// @lc code=end

describe('buddyStrings', () => {
  it('s = "ab", goal = "ba"', () => {
    expect(buddyStrings('ab', 'ba')).toBe(true)
  })

  it('s = "ab", goal = "ab"', () => {
    expect(buddyStrings('ab', 'ab')).toBe(false)
  })

  it('s = "aa", goal = "aa"', () => {
    expect(buddyStrings('aa', 'aa')).toBe(true)
  })

  it('s = "abcaa", goal = "abcbb"', () => {
    expect(buddyStrings('abcaa', 'abcbb')).toBe(false)
  })
})
