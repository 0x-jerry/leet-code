/*
 * @lc app=leetcode id=1021 lang=typescript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
  let r = ''
  let stack = 0

  let removed = false

  for (const c of s) {
    if (!removed) {
      stack++
      removed = true
      continue
    }

    if (c === '(') {
      stack++
    } else if (c === ')') {
      stack--
    }

    if (stack === 0) {
      removed = false
    } else {
      r += c
    }
  }

  return r
}
// @lc code=end

describe('remove outer parentheses', () => {
  it('s = "(()())(())"', () => {
    expect(removeOuterParentheses('(()())(())')).toBe('()()()')
  })

  it('s = "(()())(())(()(()))"', () => {
    expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())')
  })

  it('s = "()()"', () => {
    expect(removeOuterParentheses('()()')).toBe('')
  })
})
