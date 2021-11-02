/*
 * @lc app=leetcode id=744 lang=typescript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
  const t = target.charCodeAt(0)

  for (const l of letters) {
    if (l.charCodeAt(0) > t) {
      return l
    }
  }

  return letters[0]
}
// @lc code=end

describe('next greatest letter', () => {
  test('letters = ["c","f","j"], target = "a"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
  })

  test('letters = ["c","f","j"], target = "c"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f')
  })

  test('letters = ["c","f","j"], target = "d"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f')
  })

  test('letters = ["c","f","j"], target = "c"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'g')).toBe('j')
  })

  test('letters = ["c","f","j"], target = "c"', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'j')).toBe('c')
  })
})
