/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const chars = []

  for (const char of s) {
    if (!chars.length) {
      chars.push(char)
      continue
    }

    if (chars.at(-1) === char) {
      chars.pop()
    } else {
      chars.push(char)
    }
  }

  return chars.join('')
}
// @lc code=end

describe('remove duplicates', () => {
  it('abbaca', () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
  })

  it('azxxzy', () => {
    expect(removeDuplicates('azxxzy')).toBe('ay')
  })
})
