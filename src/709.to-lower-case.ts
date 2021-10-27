/*
 * @lc app=leetcode id=709 lang=typescript
 *
 * [709] To Lower Case
 */

// @lc code=start

const A = 'A'.charCodeAt(0)
const a = 'a'.charCodeAt(0)

function toLowerCase(s: string): string {
  let r = ''

  for (const c of s) {
    const d = c.charCodeAt(0) - A
    r += d >= 0 && d < 26 ? String.fromCharCode(a + d) : c
  }

  return r
}
// @lc code=end

describe('to lower case', () => {
  test('s = "Hello"', () => {
    expect(toLowerCase('Hello')).toBe('hello')
  })

  test('s = "here"', () => {
    expect(toLowerCase('here')).toBe('here')
  })

  test('s = "LOVELY"', () => {
    expect(toLowerCase('LOVELY')).toBe('lovely')
  })

  test('s = "al&phaBET"', () => {
    expect(toLowerCase('al&phaBET')).toBe('al&phabet')
  })
})
