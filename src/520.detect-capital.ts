/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  const r = /^([A-Z]+|[A-Z][a-z]+|[a-z]+)$/

  return r.test(word)
}
// @lc code=end

describe('detect capital use', () => {
  test('USA', () => {
    expect(detectCapitalUse('USA')).toBe(true)
  })

  test('FlaG', () => {
    expect(detectCapitalUse('FlaG')).toBe(false)
  })
})
