/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let r = ''
  for (let idx = 0; idx <= s.length / (k * 2); idx++) {
    const str = s.slice(idx * 2 * k, (idx * 2 + 1) * k)
    const raw = s.slice((idx * 2 + 1) * k, (idx * 2 + 2) * k)
    r = r + reverse(str) + raw
  }

  return r
}

function reverse(s: string) {
  let r = ''
  for (let idx = s.length - 1; idx >= 0; idx--) {
    r += s[idx]
  }
  return r
}
// @lc code=end

describe('reverse string', () => {
  test('s = "abcdefg", k = 2', () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
  })

  test('s = "abcd", k = 2', () => {
    expect(reverseStr('abcd', 2)).toBe('bacd')
  })
})
