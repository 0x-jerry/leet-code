/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  let r = ''
  let group = ''
  let c = ''

  for (let idx = s.length - 1; idx >= 0; idx--) {
    c = s[idx]
    if (c === '-') continue
    c = c.toUpperCase()

    group = c + group

    if (group.length === k) {
      r = r ? group + '-' + r : group
      group = ''
    }
  }

  return [group, r].filter(Boolean).join('-')
}
// @lc code=end

describe('license key formatting', () => {
  test('s = "5F3Z-2e-9-w", k = 4', () => {
    expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W')
  })

  test('s = "2-5g-3-J", k = 2', () => {
    expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J')
  })
})
