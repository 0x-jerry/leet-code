/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false

  for (let idx = 0; idx < s.length; idx++) {
    if (s === goal.slice(idx) + goal.slice(0, idx)) return true
  }

  return false
}
// @lc code=end

describe('rotate string', () => {
  test('s = "abcde", goal = "cdeab"', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true)
  })

  test('s = "abcde", goal = "abced"', () => {
    expect(rotateString('abcde', 'abced')).toBe(false)
  })
})
