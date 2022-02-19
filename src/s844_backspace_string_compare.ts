/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
const isBackspace = (c: string) => c === '#'

function calculateResult(s: string) {
  let result = ''

  for (const c of s) {
    if (isBackspace(c)) {
      result = result.slice(0, -1)
    } else {
      result += c
    }
  }

  return result
}

function backspaceCompare(s: string, t: string): boolean {
  return calculateResult(s) === calculateResult(t)
}
// @lc code=end

describe('backspaceCompare', () => {
  it('s = "ab#c", t = "ad#c"', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true)
  })

  it('s = "ab##", t = "c#d#"', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true)
  })

  it('s = "a#c", t = "b"', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false)
  })
})
