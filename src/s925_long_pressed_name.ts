/*
 * @lc app=leetcode id=925 lang=typescript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
  let nameIdx = 0
  let idx = 0

  while (idx < typed.length) {
    const correctChar = name[nameIdx]
    const char = typed[idx]

    if (char === correctChar) {
      nameIdx++
    } else {
      if (char !== typed[idx - 1]) {
        return false
      }
    }

    idx++
  }

  return nameIdx === name.length
}
// @lc code=end

describe('is long pressed name', () => {
  it('name = "alex", typed = "aaleex"', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true)
  })

  it('name = "saeed", typed = "ssaaedd"', () => {
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false)
  })

  it('name = "leelee", typed = "lleeelee"', () => {
    expect(isLongPressedName('leelee', 'lleeelee')).toBe(true)
  })
})
